// import { GraphQLSchema } from "graphql";
// import mutation from "./mutations.js";
// import ParentQuery from "./queries.js";
const { GraphQLSchema } = require('graphql')
const { mutation } = require('./mutations')
const { ParentQuery } = require('./queries')


const schema = new GraphQLSchema({
  query: ParentQuery,
  mutation: mutation,
});

module.exports =  schema;