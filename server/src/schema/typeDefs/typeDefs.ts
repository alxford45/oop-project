import { queries as query } from "./query";
import { typeDef as artist } from "./spotify/artist";
import { typeDef as user } from "./spotify/user";
import { mutations as mutation } from "./mutation";
import { typeDef as search } from "./spotify/search";
import { typeDef as artistSearch } from "./songkick/search";
import { typeDef as albums } from "./spotify/albums";
import { typeDef as image } from "./spotify/image";
export const typeDefs = [
  query,
  mutation,
  artist,
  user,
  search,
  artistSearch,
  albums,
  image
];
