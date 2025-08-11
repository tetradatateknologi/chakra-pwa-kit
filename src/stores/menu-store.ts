import { BarGraph } from "@/assets/icons/bar-graph";
import { Settings } from "@/assets/icons/settings";
import { Tracking } from "@/assets/icons/tracking";
import { Users } from "@/assets/icons/users";

const defaultMenu = () => {
  return [
    {
      name: "Dasbor",
      icon: BarGraph,
      link: "/",
      activeAt: ["/"],
    },
    {
      name: "Pengguna",
      icon: Users,
      link: "/admin/student/class-list",
      activeAt: ["/admin/student/class-list"],
    },
    {
      name: "Lacak",
      icon: Tracking,
      link: "/admin/tracking",
      activeAt: ["/admin/tracking"],
    },
    {
      name: "Pengaturan",
      icon: Settings,
      link: "/admin/setting",
      activeAt: ["/admin/setting"],
    },
  ];
};

const get = () => {
  return defaultMenu();
};

export const useMenuStore = {
  get,
};
