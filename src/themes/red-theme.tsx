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
    Button: {
      variants: {
        solid: {
          bg: "primary.400",
          color: "white",
          fontSize: "md",
          fontWeight: "bold",
          borderRadius: "60px",
          _hover: {
            bg: "primary.500",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "solid",
      },
    },
  },
});

export default RedTheme;
