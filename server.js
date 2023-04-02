const { ApolloServer } = require("apollo-server")
const {resolvers} = require("./schema/resolvers")
const {typeDefs} = require("./schema/typeDefs")
const mongoose  = require("mongoose")

const server = new ApolloServer(
  {
    typeDefs, 
    resolvers,
    playground: true
}
)

const dbconnect = async () =>{
  try{
      mongoose.set('strictQuery', true);
      await mongoose.connect('mongodb://127.0.0.1/graphql_blog', { useNewUrlParser: true, useUnifiedTopology: true, }).then(()=>{
        server.listen(5000, ()=>{
          console.log("Server is Live")
        })
      })
  }catch(error){
    console.log(error)
  }
}

dbconnect()


