import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    artist: (_source, { id }, { dataSources }) =>
      dataSources.artistAPI.getArtistById({ id })
  }
};
