import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import ArtistAPI from "./data/ArtistAPI";

const PORT = 8000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      artistAPI: new ArtistAPI()
    };
  }
});
server.applyMiddleware({ app, path: "/" });
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
