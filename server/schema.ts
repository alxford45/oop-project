import { gql } from "apollo-server";

export default gql`
  type Query {
    artist(id: String): Artist
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
