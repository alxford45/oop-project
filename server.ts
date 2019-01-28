//Currently unimplemented; Trying to setup express server to handle api request to populate react components

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

app.prepare().then(() => {
  const server = express();
  server.listen(port);

  console.log(`Now listening on port: ${port}`);
});
