export default {
  Query: {
    artist: (_source, { id }, { dataSources }) =>
      dataSources.artistAPI.getArtistById({ id })
  }
};
