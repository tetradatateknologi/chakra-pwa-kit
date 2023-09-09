import { FiHome, FiPackage, FiServer } from "react-icons/fi";
import { useAuth } from "../util/useAuth";

const getAdminMenu = () => {
  const adminMenu = [
    { name: "Dashboard", icon: FiHome, link: "/dashboard/admin" },
    { name: "API Services", icon: FiPackage, link: "/admin/service" },
    { name: "Log Activity", icon: FiServer, link: "/admin/service/log" },
  ];
  return adminMenu;
};

const getUserMenu = () => {
  const userMenu = [
    { name: "Dashboard", icon: FiHome, link: "/dashboard/user" },
    { name: "API Services", icon: FiPackage, link: "/user/service" },
  ];
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
