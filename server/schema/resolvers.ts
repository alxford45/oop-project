import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    artist: async (_source, { id }, { dataSources }) =>
      await dataSources.artistAPI.getArtistById(id),
    relatedArtists: async (_source, { id }, { dataSources }) =>
      await dataSources.artistAPI.getRelatedArtistsById(id)
  }
};
