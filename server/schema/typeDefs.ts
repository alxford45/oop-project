import { typeDef as query } from "./typeDefs/query";
import { typeDef as artist } from "./typeDefs/artist";
import { typeDef as user } from "./typeDefs/user";
import { typeDef as mutation } from "./typeDefs/mutation";

export const typeDefs = [query, mutation, artist, user];
