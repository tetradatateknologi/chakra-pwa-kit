import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import BottomNavigation from "./fragments/navigations/bottom";
import { TopNavigation, TopNavigationButton } from "./fragments/navigations/top";

export interface MobileLayoutProps {
  children?: ReactNode;
  simpleMode?: boolean;
  colorActiveMode?: boolean;
  pageTitle?: string;
  hiddenScroll?: boolean;
  center?: boolean;
  button?: TopNavigationButton | null;
  bg?: string;
}

export default function MobileLayout(props: MobileLayoutProps) {
  const { children, simpleMode, pageTitle, hiddenScroll, center, button } = props;
  return (
    <Box>
      <Container maxW={"container.sm"} px={{ sm: "0px" }}>
        <VStack height={"100dvh"} spacing={0} overflow={"hidden"}>
          <TopNavigation
            center={center}
            pageTitle={pageTitle}
            simpleMode={simpleMode}
            button={button}
          />
          <Stack
            width={"100%"}
            height={"100dvh"}
            overflowY={hiddenScroll ? "hidden" : "scroll"}
            p={{ base: "15px", md: "30px" }}
          >
            <Stack paddingTop={pageTitle == "" ? 0 : 20} paddingBottom={simpleMode ? 0 : 20}>
              {children}
            </Stack>
          </Stack>
          <BottomNavigation simpleMode={simpleMode} />
        </VStack>
      </Container>
    </Box>
  );
}
