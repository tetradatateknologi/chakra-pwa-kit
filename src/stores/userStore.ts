import { useEnv } from "../util/useEnv";
import { useLoading } from "../util/useLoading";
import { useAuth } from "../util/useAuth";

const getUserProfile = async () => {
  useLoading.show();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", useAuth.getJWT());

  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(useEnv.backendUrl("user/profile"), requestOptions);
  const json = await data.json();
  useLoading.hide();

  console.log(json);
  console.log(json.data);
  return json.data;
};

export const useUserStore = {
  getUserProfile,
};
