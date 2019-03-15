const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    artist(id: String!): Artist
  }
  type Artist {
    name: String!
  }
  type _Artist {
    genres: [String!]
    id: String!
    name: String!
    popularity: Int
    type: String!
    uri: String!
  }
`;

module.exports = typeDefs;
