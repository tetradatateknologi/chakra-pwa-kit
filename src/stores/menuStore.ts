import { FiHome, FiPackage, FiServer } from "react-icons/fi";
import { useAuth } from "../util/useAuth";

const getAdminMenu = () => {
  const adminMenu = [
    { name: "Home", icon: FiHome, link: "/admin" },
    { name: "API Services", icon: FiPackage, link: "/admin" },
    { name: "Log Activity", icon: FiServer, link: "/admin" },
  ];
  return adminMenu;
};

const getUserMenu = () => {
  const userMenu = [{ name: "Home", icon: FiHome, link: "/user" }];
  return userMenu;
};

const getMenuByRole = () => {
  const user = useAuth.getUserLoginData();
  switch (user.login_role) {
    case "admin":
      return getAdminMenu();
    case "user":
      return getUserMenu();
  }
};

export const useMenuStore = {
  getAdminMenu,
  getUserMenu,
  getMenuByRole,
};
