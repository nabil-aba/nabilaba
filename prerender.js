import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

const routesToPrerender = ["/", "/404", "/id", "/id/404"];

(async () => {
  for (const url of routesToPrerender) {
    const helmetContext = {};

    const { appHtml, stylesHtml, lang } = render(url, helmetContext);
    const { helmet } = helmetContext;

    const headHtml = `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${stylesHtml}
    `;

    const html = template
      .replace('lang="en"', `lang="${lang}"`)
      .replace("<!--app-head-->", headHtml)
      .replace("<!--app-html-->", appHtml);

    let filePath;
    if (url === "/") {
      filePath = "dist/client/index.html";
    } else if (url === "/id") {
      filePath = "dist/client/id/index.html";
    } else {
      filePath = `dist/client${url}.html`;
    }

    const absoluteFilePath = toAbsolute(filePath);
    const dir = path.dirname(absoluteFilePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(absoluteFilePath, html);
    console.log(`✅ Pre-rendered: ${filePath} (Lang: ${lang})`);
  }
})();
