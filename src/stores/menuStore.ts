import {
  FiFile,
  FiHome,
  FiAirplay,
  FiTrendingUp,
  FiCompass,
  FiStar,
} from "react-icons/fi";

const getAdminMenu = () => {
  const adminMenu = [
    { name: "Home", icon: FiHome, link: "/admin" },
    { name: "Blog List", icon: FiTrendingUp, link: "/admin/trending" },
    { name: "Use Effect", icon: FiCompass, link: "/admin/explore" },
    {
      name: "Multi",
      icon: FiAirplay,
      type: "dropdown",
      data: [
        {
          label: "sub menu 1",
          link: "/admin/sub/1",
        },
        {
          label: "sub menu 2",
          link: "/admin/sub/2",
        },
      ],
    },
    { name: "Form", icon: FiStar, link: "/admin/form" },
    { name: "Chart", icon: FiCompass, link: "/admin/chart" },
    { name: "Documentation", icon: FiFile, link: "/admin/documentation" },
  ];
  return adminMenu;
};

export const useMenuStore = {
  getAdminMenu,
};
