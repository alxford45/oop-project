import { IResolvers } from "graphql-tools";
import { User } from "../entity/User";

export const resolvers: IResolvers = {
  Query: {
    artist: async (_, { id }, { dataSources }) =>
      await dataSources.artistAPI.getArtistById(id),
    relatedArtists: async (_, { id }, { dataSources }) =>
      await dataSources.artistAPI.getRelatedArtistsById(id),
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
