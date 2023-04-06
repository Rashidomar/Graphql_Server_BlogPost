const { ApolloServer } = require("apollo-server")
const {resolvers} = require("./schema/resolvers")
const {typeDefs} = require("./schema/typeDefs")
const mongoose  = require("mongoose")
require("dotenv").config()

const server = new ApolloServer(
  {
    typeDefs, 
    resolvers,
    playground: true
}
)

const port = process.env.PORT
const db_url = process.env.URL


const dbconnect = async () =>{
  try{
      mongoose.set('strictQuery', true);
      await mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, }).then(()=>{
        server.listen(port, ()=>{
          console.log("Server is Live")
        })
      })
  }catch(error){
    console.log(error)
  }
}

dbconnect()


