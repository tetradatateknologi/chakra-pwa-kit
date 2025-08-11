import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RedTheme from "./themes/red-theme.tsx";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={RedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
