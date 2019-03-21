import { ApolloServer } from "apollo-server-express";

import ArtistAPI from "./api/ArtistAPI";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      artistAPI: new ArtistAPI()
    };
  }
});
