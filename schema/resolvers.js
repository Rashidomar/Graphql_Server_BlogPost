const { Post }= require("../models/post")
const { Author } = require("../models/author")
const {Comment} = require("../models/comment")
const { response } = require("express")

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
        }, 


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
                username:username
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

        editAuthor: async(_, args)=>{
            const { username } = args.input
            const id  = args.id
            const author = await Author.findByIdAndUpdate(id, {username:username})  
            console.log(author)
            return{
                code: 200,
                success: true,
                message: 'Author successfully Updated!',
                author: author
            }

        },

        editComment: async(_, args)=>{
            const { message,} = args.input
            const id  = args.id
            const comment = await Comment.findByIdAndUpdate(id, {message:message})  
            return{
                code: 200,
                success: true,
                message: 'Comment successfully Updated!',
                comment: comment
            }

        },

        editPost: async(_, args)=>{
            const {title, details, } = args.input
            const id  = args.id
            const post = await Post.findByIdAndUpdate(id, {title:title, details:details })  
            console.log(author)
            return{
                code: 200,
                success: true,
                message: 'Post successfully Updated!',
                post: post
            }

        },

        deletePost: async(_, {id})=>{
            const post = await Post.findByIdAndDelete(id)
            return{
                code: 200,
                success: true,
                message: 'Post successfully Deleted!',
                post: post
            }
        },

        deleteComment: async(_, {id})=>{
            const comment = await Comment.findByIdAndDelete(id)
            return{
                code: 200,
                success: true,
                message: 'Comment successfully Deleted!',
                comment: comment
            }
        },

        deleteAuthor: async(_, {id})=>{
            const author = await Author.findByIdAndDelete(id)
            return{
                code: 200,
                success: true,
                message: 'Author successfully Deleted!',
                author: author
            }
        },



        // deleteAuthorWithNull: async()=>{
        //     const foundAuthor = await Author.deleteMany({username:null})
        //     return{
        //         code: 200,
        //         success: true,
        //         message: 'Found successfully',
        //         author:foundAuthor
        //     }
        // }
  
    }



}

module.exports = {resolvers}