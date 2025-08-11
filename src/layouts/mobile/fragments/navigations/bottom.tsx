import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMenuStore } from "@/stores/menu-store";
import { useAuth } from "@/utils/useAuth";
import ButtonBottomNavigation from "./button";

interface Props {
  simpleMode?: boolean;
}

export default function BottomNavigation(props: Props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { simpleMode } = props;
  const [navigation, setNavigation] = useState<any>([]);
  const fetchData = async () => {
    const data = await useMenuStore.get();
    setNavigation(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack
      bg={"whiteAlpha.500"}
      bottom={0}
      backdropFilter={"blur(10px)"}
      position={"fixed"}
      width={"100%"}
      height={"7dvh"}
      hidden={simpleMode}
    >
      <Stack height={"100%"} justify={"center"} direction={"row"} spacing={0}>
        {navigation.map((one: any) => {
          return (
            <ButtonBottomNavigation
              key={useAuth.getRandomId()}
              icon={one.icon}
              text={one.name}
              href={one.link}
              isActive={one.activeAt.includes(currentPath) ? true : false}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
