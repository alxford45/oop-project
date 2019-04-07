import { queries as query } from "./query";
import { typeDef as artist } from "./spotify/artist";
import { typeDef as user } from "./spotify/user";
import { mutations as mutation } from "./mutation";
import { typeDef as search } from "./spotify/search";
import { typeDef as artistSearch } from "./songkick/search";

export const typeDefs = [query, mutation, artist, user, search, artistSearch];
