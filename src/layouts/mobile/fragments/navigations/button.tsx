import { Box, Icon, Text, Tooltip, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  icon: any;
  text: string;
  href: string;
  isActive?: boolean;
}

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

export default function ButtonBottomNavigation(props: Props) {
  const theme = useTheme();
  const primaryColor = theme.colors.primary[400];
  const { icon, text, href, isActive } = props;

  return (
    <Tooltip label={text}>
      <MotionBox
        py={"5px"}
        px={"5%"}
        width={"25%"}
        textAlign={"center"}
        animate={{
          scale: isActive ? 1.1 : 1,
          color: isActive ? primaryColor : "#6B7280",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Link to={href}>
          <MotionIcon
            as={icon}
            fontSize={{ base: "2xl", md: "3xl" }}
            animate={{
              scale: isActive ? 1.2 : 1,
              color: isActive ? primaryColor : "#6B7280",
            }}
            transition={{ duration: 0.3 }}
          />
          <Text
            justifyContent={"center"}
            display={{ base: "hidden", md: "flex" }}
            fontSize={{ base: "x-small", md: "small" }}
            color={isActive ? "primary.400" : "inherit"}
            fontWeight={"light"}
          >
            {text}
          </Text>
        </Link>
      </MotionBox>
    </Tooltip>
  );
}
