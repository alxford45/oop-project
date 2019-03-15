const resolvers = {
  Query: {
    artist: (_source, { id }, { dataSources }) =>
      dataSources.artistAPI.getArtistById({ id: String })
  }
};
module.exports = resolvers;
