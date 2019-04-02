import { typeDef as query } from "./typeDefs/query";
import { typeDef as artist } from "./typeDefs/artist";
import { typeDef as user } from "./typeDefs/user";
import { typeDef as mutation } from "./typeDefs/mutation";
import { typeDef as search } from "./typeDefs/search";

export const typeDefs = [query, mutation, artist, user, search];
