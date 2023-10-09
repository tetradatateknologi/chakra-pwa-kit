import { toast } from "react-toastify";
import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";
import { useAuth } from "../util/useAuth";

const getFilms = async () => {
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

  const data = await fetch(useEnv.backendUrl("film"), requestOptions);
  const json = await data.json();
  useLoading.hide();

  return json.data;
};

const getFilm = async (id: string) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(useEnv.backendUrl("film/" + id), requestOptions);
  const json = await data.json();
  useLoading.hide();

  return json.data;
};

const createNewFilm = (params: any) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.set("Authorization", useAuth.getJWT());

  const formdata = new FormData();
  formdata.append("nama", params.name);
  formdata.append("author", params.author);
  formdata.append("description", params?.description);

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("film/create"), requestOptions)
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

const updateFilm = (params: any) => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const formdata = new URLSearchParams();
  formdata.append("id", params.id);
  formdata.append("name", params.name);
  formdata.append("author", params.author);
  formdata.append("description", params?.description);

  const requestOptions: any = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("film"), requestOptions)
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

export const useFilmStore = {
  createNewFilm,
  getFilms,
  getFilm,
  updateFilm,
};
