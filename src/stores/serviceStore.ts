import { toast } from "react-toastify";
import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";
import { useAuth } from "../util/useAuth";

const getServices = async (shortDesc: boolean = true) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const formdata = new FormData();
  formdata.append("show_all", "1");
  if (shortDesc) {
    formdata.append("short", "1");
  }

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  const data = await fetch(useEnv.backendUrl("service"), requestOptions);
  const json = await data.json();
  useLoading.hide();

  return json.data;
};

const getLogServices = async () => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const formdata = new FormData();
  formdata.append("show_all", "1");

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  const data = await fetch(useEnv.backendUrl("service/log"), requestOptions);
  const json = await data.json();
  useLoading.hide();

  return json.data;
};

const getService = async (id: string) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(useEnv.backendUrl("service/" + id), requestOptions);
  const json = await data.json();
  useLoading.hide();

  return json.data;
};

const createNewService = (params: any) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const formdata = new FormData();
  formdata.append("name", params.name);
  formdata.append("endpoint", params.endpoint);
  formdata.append("method", params.method);
  formdata.append("description", params?.description);
  formdata.append("body_type", params?.body_type);
  formdata.append("online", params?.online);
  formdata.append("parameter", JSON.stringify(params?.parameter));
  formdata.append("custom_gateway_endpoint", params?.custom_gateway_endpoint);

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("service/register"), requestOptions)
    .then((response) => response.json())
    .then((response) => {
      if (response.status_code == 200) {
        toast.success("Berhasil menambahkan data");
        window.history.back();
        return true;
      }
      if (response.status_code == 400) {
        toast.error(response.message);
        useLoading.hide();
        return false;
      }
      throw new Error();
    })
    .catch((error) => {
      toast.error("terjadi kesalahan pada aplikasi");
      console.log("error", error);
      useLoading.hide();
    });
};

const updateService = (params: any) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const formdata = new URLSearchParams();
  formdata.append("keychar", params.keychar);
  formdata.append("name", params.name);
  formdata.append("endpoint", params.endpoint);
  formdata.append("method", params.method);
  formdata.append("description", params?.description);
  formdata.append("body_type", params?.body_type);
  formdata.append("online", params?.online);
  formdata.append("parameter", JSON.stringify(params?.parameter));
  formdata.append("custom_gateway_endpoint", params?.custom_gateway_endpoint);

  const requestOptions: any = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("service"), requestOptions)
    .then((response) => response.json())
    .then((response) => {
      if (response.status_code == 200) {
        toast.success("Berhasil mengupdate data");
        window.history.back();
        return true;
      }
      if (response.status_code == 400) {
        toast.error(response.message);
        useLoading.hide();
        return false;
      }
      throw new Error();
    })
    .catch((error) => {
      toast.error("terjadi kesalahan pada aplikasi");
      console.log("error", error);
      useLoading.hide();
    });
};

export const useServiceStore = {
  createNewService,
  getServices,
  getService,
  getLogServices,
  updateService,
};
