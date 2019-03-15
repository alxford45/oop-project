const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ArtistAPI = require("./data/artist");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      artistAPI: new ArtistAPI()
    };
  }
});
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
