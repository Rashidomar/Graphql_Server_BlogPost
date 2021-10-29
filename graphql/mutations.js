import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
const Post = require('../models/post')
import { AuthorType, PostType } from "./types.js";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // create a post
    createPost: {
      type: PostType,
      args: {
        title: {
          type: GraphQLString,
        },
        details: {
          type: GraphQLString,
        },
        author: {
          type: AuthorType,
        },
      },
      async resolve(parents, args) {
        const { title, details } = args;
        const newPost = await Post.create({ title, details });
        return newPost;
      },
    },

    // delete post
    deletePost: {
      type: PostType,
      args: {
        _id: GraphQLID,
      },
      async resolve(parents, args) {
        const { _id } = args;
        const deletedPost = await Post.findOneAndDelete({ _id });
        return deletedPost;
      },
    },
  },
});

export default mutation;
