import { toast } from "react-toastify";
import { useAuth } from "../util/useAuth";
import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";

interface loginParams {
  email: string;
  password: string;
}
const login = (params: loginParams) => {
  const formdata = new FormData();

  formdata.append("email", params.email);
  formdata.append("password", params.password);

  const requestOptions: any = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("login"), requestOptions)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      toast.success("login berhasil");
      useAuth.setAuth(data);

      const role = (data?.payload?.login_role) ? data?.payload?.login_role : 'admin';
      window.location.href = "/dashboard/" + role;
    })
    .catch((error) => {
      toast.error(
        "login gagal, silahkan cek kembali email dan password yang digunakan"
      );
      console.log("error", error);
      useLoading.hide();
    });
};

export const useLoginStore = {
  login,
};
