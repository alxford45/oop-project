import { gql } from "apollo-boost";
export const artistsQuery = gql`
  query ArtistsQuery($ids: [ID!]!) {
    artists(ids: $ids) {
      artists {
        id
        name
        genres
        popularity
        uri
        ...ImagesFragment2
      }
    }
  }
  fragment ImagesFragment2 on Artist {
    images {
      height
      width
      url
    }
  }
`;
