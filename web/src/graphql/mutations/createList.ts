import { gql } from "apollo-boost";
export const createList = gql`
  mutation createList($title: String!, $itemIds: [String!]!) {
    createList(title: $title, itemIds: $itemIds)
  }
`;
