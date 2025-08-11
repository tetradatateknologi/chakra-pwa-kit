import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export interface TopNavigationButton {
  text: string;
  link: string;
  secondary?: boolean;
  icon?: any;
}

interface TopNavigationProps {
  simpleMode?: boolean;
  pageTitle?: string;
  center?: boolean;
  button?: TopNavigationButton | null;
}

export function TopNavigation(props: TopNavigationProps) {
  const { simpleMode, pageTitle, center, button } = props;
  return (
    <Stack hidden={pageTitle == ""} width={"100%"} height={"10dvh"} color={"black"}>
      <Box
        justifyContent={center ? "center" : "space-between"}
        height={"100%"}
        display={"flex"}
        px={5}
        alignItems={"center"}
        position={"relative"}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"}>
          <Icon
            cursor={"pointer"}
            as={FiArrowLeft}
            fontSize={"xl"}
            me={5}
            display={simpleMode ? "inline" : "none"}
            onClick={() => {
              window.history.back();
            }}
          />
          {pageTitle}
        </Text>
        <Box hidden={button ? false : true}>
          <Link to={button?.link ? button?.link : "/"}>
            <Button
              justifyContent={"space-between"}
              gap={"5px"}
              bg={button?.secondary ? "secondary.500" : "primary.400"}
            >
              {button?.icon ? <Icon fontSize={"lg"} as={button.icon} /> : <></>}
              {button?.text}
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
}
