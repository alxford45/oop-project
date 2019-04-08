import { gql } from "apollo-server-express";

export const queries = gql`
  type Query {
    search(name: String!): Search
    artist(id: ID!): Artist!
    relatedArtists(id: ID!): RelatedArtists
    albums(id: ID!): Albums
    me: User
    artistSearch(name: String!): SongkickSearch
    eventSearch(id: ID!): SongkickSearch
  }
`;
