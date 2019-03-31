import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Query {
    artist(id: String!): Artist
    relatedArtists(id: String!): RelatedArtists
    me: User
  }
`;
