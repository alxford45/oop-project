import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    artist(id: String!): Artist
    relatedArtists(id: String!): RelatedArtists
  }
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
