import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Mutation {
    register(email: String!): Boolean!
    login(email: String!): User
    logout: Boolean!
    createList(title: String!, itemIds: [String!]!): Boolean!
    deleteList(listId: ID!): ID
    addToList(itemIds: [String!]!, listId: ID!): [ID]
    removeFromList(itemIds: [ID!]!, listId: ID!): [ID]
  }
`;
