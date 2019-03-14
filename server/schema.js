const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello: String
  }
  type Artist {
    genres: [String!]
    id: String!
    name: String!
    popularity: Int
    type: String!
    uri: String!
  }
`;

module.exports = typeDefs;
