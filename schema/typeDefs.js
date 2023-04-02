const { gql } = require("apollo-server")


const typeDefs = gql`

    type Author{
        id:ID
        username:String
        # posts:[Post]
    }

    input newAuthor{
        username:String!
    }

    input editAuthor{
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

    input editPost{
        title:String!
        details:String!
    }

    type Comment{
        id:ID!
        username:String!
        message:String!
        post:Post!
    }

    type returnDeletedCount{
        count:Int!
    }

    input newComment{
        username:String!
        message:String!
        postID:Int!
    }

    input editComment{
        message:String!
    }

    interface MutationResponse {
        code:    String!
        success: Boolean!
        message: String!
    }

    type createPostResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        post: Post
    }

    type createCommentResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type createAuthorResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        author: Author
    }

    type editPostResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        post: Post
    }


    type editCommentResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type editAuthorResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        author: Author
    }


    type deletePostResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        post: Post
    }


    type deleteCommentResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type deleteAuthorResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        author: Author
    }

    type returnDeletedCountResponse implements MutationResponse{
        code: String!
        success: Boolean!
        message: String!
        count: returnDeletedCount
    }

    type Query{
        posts:[Post!]!
        authors:[Author!]

        post(id:ID):Post!
        author(id:ID):Author!

    }

    type Mutation{
        createPost(input: newPost): createPostResponse
        createAuthor(input: newAuthor): createAuthorResponse
        createComment(input: newComment): createCommentResponse

        editPost(id: ID!, input: editPost): editPostResponse
        editComment(id:ID!, input: editComment): editCommentResponse
        editAuthor(id:ID!, input: editAuthor): editAuthorResponse

        deletePost(id:ID!): deletePostResponse
        deleteAuthor(id:ID!): deleteAuthorResponse
        deleteComment(id:ID!): deleteCommentResponse



    }

`

module.exports = {typeDefs}