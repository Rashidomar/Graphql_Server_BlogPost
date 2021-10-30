const {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } = require("graphql");
  
  const AuthorType = new GraphQLObjectType({
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
  
  const PostType = new GraphQLObjectType({
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

//   module.exports = AuthorType
module.exports = PostType

  
  