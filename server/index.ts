import { createConnection } from "typeorm";
import * as session from "express-session";
import { server } from "./server";
import { app } from "./app";

const main = async () => {
  const PORT = 8000;

  await createConnection();

  app.use(
    session({
      secret: "asdjlfkaasdfkjlads",
      resave: false,
      saveUninitialized: false
    })
  );

  server.applyMiddleware({
    app,
    path: "/",
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  });
  app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
  });
};

main();
