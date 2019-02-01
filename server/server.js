/*
 * Server entry file and Express configuration adapted from app.js
 *
 * Source: https://github.com/builderbook/builderbook/blob/master/server/app.js
 * Version: commit a456b34 on Oct 22, 2018
 * Accessed: January 2019
 * License: https://github.com/builderbook/builderbook/blob/master/LICENSE.md
 */

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err.stack);
    app.close(1);
  });
