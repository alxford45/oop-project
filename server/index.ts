import { server } from "./server";
import { app } from "./app";

const PORT = 8000;

server.applyMiddleware({ app, path: "/" });
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
