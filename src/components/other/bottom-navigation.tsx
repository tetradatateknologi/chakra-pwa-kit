import {
  Stack
} from "@chakra-ui/react";
import { FiActivity, FiHome, FiInstagram, FiUser } from "react-icons/fi";
import ButtonBottomNavigation from "../button/button-bottom-navigation";

export default function BottomNavigation() {
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
          isActive={false}
        />
        <ButtonBottomNavigation
          icon={FiInstagram}
          text={'Feed'}
          href={'/'}
          isActive={true}
        />
        <ButtonBottomNavigation
          icon={FiActivity}
          text={'Activity'}
          href={'/'}
          isActive={false}
        />
        <ButtonBottomNavigation
          icon={FiUser}
          text={'Profile'}
          href={'/'}
          isActive={false}
        />
      </Stack>
    </Stack>
  )
}
