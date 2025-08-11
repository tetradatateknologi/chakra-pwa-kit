import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TelkomselTheme from "./themes/telkomsel-theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={TelkomselTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
