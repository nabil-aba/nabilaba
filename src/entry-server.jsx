import { ChakraProvider } from "@chakra-ui/react";
import { extractCritical } from "@emotion/server";
import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";

import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import theme from "./pages/theme.jsx";

export function render(url, helmetContext) {
  const serverLang = url.startsWith("/id") ? "id" : "en";

  const rawHtml = renderToString(
    <ChakraProvider theme={theme}>
      <StaticRouter location={url}>
        <HelmetProvider context={helmetContext}>
          <LanguageProvider serverLang={serverLang}>
            <App />
          </LanguageProvider>
        </HelmetProvider>
      </StaticRouter>
    </ChakraProvider>,
  );

  const { html, css, ids } = extractCritical(rawHtml);
  const stylesHtml = `<style data-emotion="${ids.join(" ")}">${css}</style>`;

  return { appHtml: html, stylesHtml, lang: serverLang };
}
