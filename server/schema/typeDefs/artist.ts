import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Artist {
    genres: [String!]
    id: String!
    name: String!
    popularity: Int!
    type: String!
    uri: String!
  }
  type RelatedArtists {
    artists: [Artist!]
  }
`;
