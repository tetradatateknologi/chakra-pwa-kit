import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const RedTheme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: {
      50: "#F2F2F2",
      300: "red",
      400: "#ed1846",
      500: "#b21234",
    },
  },
  components: {
    Heading: {
      defaultProps: {
        size: "lg",
      },
    },
    Button: {
      variants: {
        solid: {
          bg: "primary.400",
          color: "white",
          fontSize: "md",
          borderRadius: "10px",
          _hover: {
            bg: "primary.500",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
  },
});

export default RedTheme;
