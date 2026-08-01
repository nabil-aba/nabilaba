import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import theme from "./pages/theme.jsx";

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
  const hydrate = () => hydrateRoot(rootElement, app);

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(hydrate, { timeout: 500 });
  } else {
    setTimeout(hydrate, 200);
  }
} else {
  createRoot(rootElement).render(app);
}
