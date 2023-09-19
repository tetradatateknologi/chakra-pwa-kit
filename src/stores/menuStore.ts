import { FiHome, FiPackage, FiServer, FiFilm, FiBook } from "react-icons/fi";
import { useAuth } from "../util/useAuth";

const getAdminMenu = () => {
  const adminMenu = [
    { name: "Dashboard", icon: FiHome, link: "/dashboard/admin" },
    { name: "Daftar Layanan", icon: FiPackage, link: "/admin/service" },
    { name: "Log Penggunaan", icon: FiServer, link: "/admin/service/log" },
  ];
  return adminMenu;
};

const getUserMenu = () => {
  const userMenu = [
    { name: "Dashboard", icon: FiHome, link: "/dashboard/user" },
    {
      name: "Sample Page",
      type: "dropdown",
      icon: FiPackage,
      data: [
        {
          label: "Form",
          link: "/sample/form",
        },
        {
          label: "Blog List",
          link: "/sample/trending",
        },
        {
          label: "How to Use Effect",
          link: "/sample/explore",
        },
        {
          label: "Chart JS",
          link: "/sample/chart",
        },
        {
          label: "API Documentation",
          link: "/sample/documentation",
        },
      ],
    },
    { name: "Film", icon: FiFilm, link: "/dashboard/film" },
    { name: "Course", icon: FiBook, link: "/dashboard/film" },
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
    default:
      return getUserMenu();
  }
};

export const useMenuStore = {
  getAdminMenu,
  getUserMenu,
  getMenuByRole,
};
