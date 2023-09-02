const setAuth = (data?: any | null) => {
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  localStorage.setItem("isLogin", "1");
};

const resetAuth = () => {
  localStorage.clear();
};

const getUserLoginData = () => {
  if (isLogin()) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.payload;
  }
  return undefined;
};

const isLogin = () => {
  if (localStorage.getItem("isLogin") != "1") {
    return false;
  }
  return true;
};

export const useAuth = {
  setAuth,
  resetAuth,
  isLogin,
  getUserLoginData,
};
