import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound.jsx";

const pages = import.meta.glob("./pages/**/index.{js,jsx}", { eager: true });
const dynamicPages = import.meta.glob("./pages/**/[id].{js,jsx}", {
  eager: true,
});

function App() {
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
          <Route key={routePath} path={routePath} element={<Component />} />
        );
      })}
      {Object.keys(dynamicPages).map((path) => {
        const Component = dynamicPages[path].default;
        const routePath = path
          .replace("./pages", "")
          .replace("/[id].jsx", "/:id")
          .replace("/[id].js", "/:id");
        return (
          <Route key={routePath} path={routePath} element={<Component />} />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
