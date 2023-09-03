import { toast } from "react-toastify";
import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";
import { useAuth } from "../util/useAuth";
import { useAlert } from "../util/useAlert";

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
        useAlert.setSuccessMessage("Berhasil menambahkan data");
        window.location.href = "/admin";
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

export const serviceStore = {
  createNewService,
};
