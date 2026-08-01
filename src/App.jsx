import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound.jsx";

const pages = import.meta.glob("./pages/**/index.{js,jsx}", { eager: true });
const dynamicPages = import.meta.glob("./pages/**/[id].{js,jsx}", {
  eager: true,
});

export default function App() {
  return (
    <Routes>
      {Object.keys(pages).map((path) => {
        const Component = pages[path].default;
        const routePath =
          path
            .replace("./pages", "")
            .replace("/index.jsx", "")
            .replace("/index.js", "") || "/";

        return (
          <React.Fragment key={routePath}>
            <Route path={routePath} element={<Component />} />
            <Route
              path={`/id${routePath === "/" ? "" : routePath}`}
              element={<Component />}
            />
          </React.Fragment>
        );
      })}

      {Object.keys(dynamicPages).map((path) => {
        const Component = dynamicPages[path].default;
        const routePath = path
          .replace("./pages", "")
          .replace("/[id].jsx", "/:id")
          .replace("/[id].js", "/:id");

        return (
          <React.Fragment key={`dynamic-${routePath}`}>
            <Route path={routePath} element={<Component />} />
            <Route path={`/id${routePath}`} element={<Component />} />
          </React.Fragment>
        );
      })}

      <Route path="/id/*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
