import { gql } from "apollo-boost";
export const listById = gql`
  query listById($listId: ID!) {
    listById(listId: $listId) {
      id
      title
      ids
    }
  }
`;
