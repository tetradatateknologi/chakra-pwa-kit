import { FiBook, FiHome, FiRadio, FiUser } from "react-icons/fi";

const defaultMenu = () => {
  return [
    {
      name: "Home",
      icon: FiHome,
      link: "/",
      activeAt: ["/"],
    },
    {
      name: "Content",
      icon: FiBook,
      link: "/content",
      activeAt: ["/content"],
    },
    {
      name: "Membership",
      icon: FiRadio,
      link: "/membership",
      activeAt: ["/membership"],
    },
    {
      name: "Profile",
      icon: FiUser,
      link: "/profile",
      activeAt: ["/profile"],
    },
  ];
};

const get = () => {
  return defaultMenu();
};

export const useMenuStore = {
  get,
};
