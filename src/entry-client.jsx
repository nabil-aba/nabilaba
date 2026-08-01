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
  let isHydrated = false;

  const hydrate = () => {
    if (isHydrated) return;
    isHydrated = true;

    hydrateRoot(rootElement, app);

    ["scroll", "mousemove", "touchstart", "keydown", "click"].forEach((e) => {
      window.removeEventListener(e, hydrate);
    });
  };

  ["scroll", "mousemove", "touchstart", "keydown", "click"].forEach((e) => {
    window.addEventListener(e, hydrate, { once: true, passive: true });
  });

  setTimeout(hydrate, 3500);
} else {
  createRoot(rootElement).render(app);
}
