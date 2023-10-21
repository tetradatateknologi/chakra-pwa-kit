import {
  Stack
} from "@chakra-ui/react";
import { FiActivity, FiHome, FiInstagram, FiUser } from "react-icons/fi";
import ButtonBottomNavigation from "../button/button-bottom-navigation";
import { useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation()
  const path = location.pathname

  return (
    <Stack
      bg={'white'}
      width={'100%'}
      height={'7vh'}
    >
      <Stack height={'100%'} direction={'row'} spacing={0}>
        <ButtonBottomNavigation
          icon={FiHome}
          text={'Home'}
          href={'/'}
          isActive={(path == '/') ? true : false}
        />
        <ButtonBottomNavigation
          icon={FiInstagram}
          text={'Feed'}
          href={'/feed'}
          isActive={(path == '/feed') ? true : false}
        />
        <ButtonBottomNavigation
          icon={FiActivity}
          text={'Activity'}
          href={'/activity'}
          isActive={(path == '/activity') ? true : false}
        />
        <ButtonBottomNavigation
          icon={FiUser}
          text={'Profile'}
          href={'/profile'}
          isActive={(path == '/profile') ? true : false}
        />
      </Stack>
    </Stack>
  )
}
