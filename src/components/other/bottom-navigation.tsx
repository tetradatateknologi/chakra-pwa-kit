import {
  Stack
} from "@chakra-ui/react";
import { FiAirplay, FiPackage, FiActivity } from "react-icons/fi";
import ButtonBottomNavigation from "../button/button-bottom-navigation";

export default function BottomNavigation() {
  return (
    <Stack
      bg={'blue.100'}
      width={'100%'}
      height={'7vh'}
    >
      <Stack height={'100%'} direction={'row'} spacing={0}>
        <ButtonBottomNavigation
          icon={FiAirplay}
          text={'Home'}
          href={'/'}
          isActive
        />
        <ButtonBottomNavigation
          icon={FiPackage}
          text={'Package'}
          href={'/'}
        />
        <ButtonBottomNavigation
          icon={FiActivity}
          text={'Activity'}
          href={'/'}
        />
      </Stack>
    </Stack>
  )
}
