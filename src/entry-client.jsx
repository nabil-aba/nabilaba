import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import theme from "./pages/theme.jsx";
import { LanguageProvider } from "./context/LanguageContext";

const rootElement = document.getElementById("root");

const app = (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <HelmetProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </HelmetProvider>
    </BrowserRouter>
  </ChakraProvider>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}