import { gql } from "apollo-boost";
export const createList = gql`
  mutation createList($title: String!) {
    createList(title: $title) 
  }
`;
