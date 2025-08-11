import { Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  icon: any;
  text: string;
  href: string;
  isActive?: boolean;
}
export default function ButtonBottomNavigation(props: IProps) {
  const { icon, text, href, isActive } = props;
  return (
    <Tooltip label={text}>
      <Box
        bg={"white"}
        color={isActive ? "secondary.500" : "gray.500"}
        py={"5px"}
        px={"5%"}
        width={"25%"}
        textAlign={"center"}
      >
        <Link to={href}>
          <Icon
            as={icon}
            color={isActive ? "primary.400" : "inherit"}
            fontSize={{ base: "2xl", md: "3xl" }}
          />
          <Text
            justifyContent={"center"}
            display={{ base: "hidden", md: "flex" }}
            fontSize={{ base: "x-small", md: "small" }}
            color={isActive ? "primary.400" : "inherit"}
            fontWeight={"normal"}
          >
            {text}
          </Text>
        </Link>
      </Box>
    </Tooltip>
  );
}
