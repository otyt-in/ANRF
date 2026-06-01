import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const port = Number(process.env.PORT || 3000);
const root = process.cwd();

const routes = new Set([
  "/",
  "/about",
  "/work",
  "/work/rosewood-conservation",
  "/work/social-support",
  "/stories",
  "/stories/planting-hope-one-rosewood-at-a-time",
  "/stories/why-east-indian-rosewood-needs-documentation",
  "/stories/naya-nari-where-nature-inspires-women-design",
  "/contact",
  "/studio",
]);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  const path = url.pathname.replace(/\/$/, "") || "/";
  const file = routes.has(path) ? "preview.html" : url.pathname.slice(1);

  try {
    const content = await readFile(join(root, file));
    response.writeHead(200, { "Content-Type": mime[extname(file)] || "text/plain; charset=utf-8" });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, () => {
  console.log(`ANRF preview running at http://localhost:${port}`);
});
