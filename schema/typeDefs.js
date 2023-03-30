const { gql } = require("apollo-server")


const typeDefs = gql`
    type Author{
        id:ID!
        username:String!
        posts:[Post!]!
    }

    input newAuthor{
        username:String!
    }

    type Post{
        id:ID!
        title:String!
        details:String!
        date:String!
        author:Author!
        likes:Int
        disLikes:Int
        comment:[Comment]
    }

    input newPost{
        title:String!
        details:String!
        authorID:Int!
    }

    type Comment{
        id:ID!
        username:String!
        message:String!
        post:Post!
    }

    input newComment{
        username:String!
        message:String!
        postID:Int!

    }


    type Query{
        posts:[Post!]!
        authors:[Author!]!

        post(id:ID):Post!
        author(id:ID):Author

    }

    type Mutation{
        createPost(input: newPost): Post
        createAuthor(input: newAuthor): Author
        createComment(input: newComment): Comment


    }

`

module.exports = {typeDefs}