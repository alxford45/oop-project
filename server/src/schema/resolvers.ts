import { IResolvers } from "graphql-tools";
import { User } from "../entity/User";

export const resolvers: IResolvers = {
  Query: {
    eventByName: async (_, { name }, { dataSources }) => {
      console.log("hello");
      const res = await dataSources.songkickSearchAPI.getArtistByName(name);
      const id = res.resultsPage.results.artist[0].id;
      console.log(id);
      return dataSources.songkickSearchAPI.getEventsByArtistId(id);
    },
    search: async (_, { name }, { dataSources }) =>
      await dataSources.searchAPI.getArtistsByName(name),
    artistSearch: async (_, { name }, { dataSources }) =>
      await dataSources.songkickSearchAPI.getArtistByName(name),
    eventSearch: async (_, { id }, { dataSources }) =>
      await dataSources.songkickSearchAPI.getEventsByArtistId(id),
    artist: async (_, { id }, { dataSources }) =>
      await dataSources.artistAPI.getArtistById(id),
    relatedArtists: async (_, { id }, { dataSources }) =>
      await dataSources.artistAPI.getRelatedArtistsById(id),
    albums: async (_, { id }, { dataSources }) =>
      await dataSources.artistAPI.getAlbumsById(id),
    me: (_, __, { req }) => {
      if (!req.session.userId) {
        return null;
      }
      return User.findOne(req.session.userId);
    }
  },
  Mutation: {
    register: async (_, { email }) => {
      await User.create({
        email
      }).save();

      return true;
    },
    login: async (_, { email }, { req }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      }
      req.session.userId = user.id;

      return user;
    },
    logout: async (_, __, { req, res }) => {
      await new Promise(res => req.session.destroy(() => res()));
      res.clearCookie("connect.sid");
      return true;
    }
  }
};
