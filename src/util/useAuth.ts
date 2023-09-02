const setAuth = (data?: any | null) => {
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  localStorage.setItem("isLogin", "1");
};

const resetAuth = () => {
  localStorage.clear();
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
};
