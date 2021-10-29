import { GraphQLSchema } from "graphql";
import mutation from "./mutations.js";
import RootQuery from "./queries.js";

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});

export default schema;