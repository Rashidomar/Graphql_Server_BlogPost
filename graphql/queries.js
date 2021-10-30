const { GraphQLID, GraphQLList, GraphQLObjectType } = require("graphql");
const Post = require('../models/post')
const PostType = require('./types')

const ParentQuery = new GraphQLObjectType({
  name: "AllPosts",
  fields: {
    // query for all posts
    posts: {
      type: GraphQLList(PostType),
      async resolve() {
        const blogs = await Post.find({}).populate("author");
        return blogs;
      },
    },

    // query for a single post
    post: {
      type: PostType,
      args: {
        _id: {
          type: GraphQLID,
        },
      },
      async resolve(parent, args) {
        const { _id } = args;
        const blog = await Post.findOne({ _id }).populate("author");
        return blog;
      },
    },
  },
});

module.exports = ParentQuery;
