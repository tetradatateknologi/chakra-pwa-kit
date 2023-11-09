import {
  Box,
  Container,
  Stack,
  VStack
} from "@chakra-ui/react";
import { ReactNode } from "react";
import BottomNavigation from "../components/other/bottom-navigation";
import TopNavigation from "../components/other/top-navigation";

interface MobileLayoutProps {
  children: ReactNode
  simpleMode?: boolean
}

export default function MobileLayout(props: MobileLayoutProps) {
  const { children, simpleMode } = props
  return (
    <Box bg={'blue.50'}>
      <Container maxW={'container.sm'} px={{ sm: '0px' }}>
        <VStack
          bg={'white'}
          height={'100vh'}
          spacing={0}
          overflow={'hidden'}
        >
          <TopNavigation simpleMode={simpleMode} />
          <Stack
            width={'100%'}
            height={(simpleMode) ? '95vh' : '88vh'}
            overflowY={'scroll'}
            p={10}
          >
            {children}
          </Stack>
          <BottomNavigation simpleMode={simpleMode} />
        </VStack>
      </Container>
    </Box>
  )
}
