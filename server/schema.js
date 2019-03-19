const { gql } = require("apollo-server");
// Artist is working version
// _Artist is ideal type but is currently unimplmented
const typeDefs = gql`
  type Query {
    artist(id: String!): Artist
  }

  type Artist {
    genres: [String!]
    id: String!
    name: String!
    popularity: Int
    type: String!
    uri: String!
  }
  type Artist_topTracks {
    artists: [Artist]
  }
`;

module.exports = typeDefs;
