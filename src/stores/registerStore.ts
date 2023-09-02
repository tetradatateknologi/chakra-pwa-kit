import { toast } from "react-toastify";
import { useAuth } from "../util/useAuth";
import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";

interface registerParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const register = (params: registerParams) => {
  const formdata = new FormData();

  formdata.append("name", params.name);
  formdata.append("email", params.email);
  formdata.append("password", params.password);
  formdata.append("password_confirmation", params.passwordConfirmation);

  const requestOptions: any = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(useEnv.backendUrl("register"), requestOptions)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      toast.success("registrasi berhasil silahkan login");
      useAuth.setAuth(data);
      window.location.href = "/login";
    })
    .catch((error) => {
      toast.error("registrasi gagal");
      console.log({ error });
      useLoading.hide();
    });
};

export const useRegisterStore = {
  register,
};
