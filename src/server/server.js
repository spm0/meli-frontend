import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
import { PORT } from "../shared/utils/constants";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const server = express();

server.use(express.static(__dirname + "/../"));
server.get("*", (req, res) => {
  const pageTemplate = (childsString) => `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/shared/assets/styles/global.css">
  </head>
  <body>
    <div id="root">${childsString}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
  const reactAppString = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.status(200).send(pageTemplate(reactAppString));
});

server.listen(PORT, function () {
  console.log(`Running server at http://localhost:${PORT}`);
});
