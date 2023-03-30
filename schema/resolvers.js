const { Post }= require("../models/post")
const { Author } = require("../models/author")
const {Comment} = require("../models/comment")

const resolvers = {
    Query:{
        posts: async()=>{
            return await Post.find()
        },

        authors: async()=>{
            return await Author.find()
        },

        post: async(_, {id})=>{
            return await Post.findById(id)
        },

        author: async(_, {id})=>{
            return await Author.findById(id)
        }

    },

    Mutation:{
        createPost : async(_, args,)=>{
            const {title, details, authorID } = args.input;
            const newPost = new Post({
                title:title,
                details:details,
                author: authorID,
            })

            const postDoc = await newPost.save()
            return {
                code: 200,
                success: true,
                message: 'Post successfully Created!',
                post:postDoc
            }


        },
        createAuthor: async(_, args,)=>{
            const {username} = args.input

            const newAuthor = new Author({
                usernam:username
            })

            const authorDoc = await newAuthor.save()
            return{
                code: 200,
                success: true,
                message: 'Author successfully Created!',
                author:authorDoc
            }


        },
        createComment: async(_, args,)=>{
            const {username, message, postID} = args.input

            const newComment = new Comment({
                username:username,
                message:message,
                postID:postID

            })

            const commentDoc = newComment.save()
            return{
                code: 200,
                success: true,
                message: 'Comment successfully Created!',
                comment:commentDoc
            }


        },
    }



}

module.exports = {resolvers}