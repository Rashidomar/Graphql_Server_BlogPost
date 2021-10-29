import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
  
  export const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
      _id: {
        type: GraphQLID,
      },
      userName: {
        type: GraphQLString,
      },
      posts: {
        type: GraphQLList(PostType),
      },
    }),
  });
  
  export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
      _id: {
        type: GraphQLID,
      },
      title: {
        type: GraphQLString,
      },
      details: {
        type: GraphQLString,
      },
      date: {
        type: GraphQLString,
      },
      author: {
        type: AuthorType,
      },
      likes: {
        type: GraphQLInt,
      },
      disLikes: {
        type: GraphQLInt,
      },
    }),
  });
  