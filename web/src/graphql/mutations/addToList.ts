import { gql } from "apollo-boost";
export const addToList = gql`
  mutation addToList($itemIds: [ID!]!, $listId: ID!) {
    addToList(itemIds: $itemIds, $listId) 
  }
`;
