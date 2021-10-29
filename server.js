const express = require('express')
const mongoose = require('mongoose')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const app = express();

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/mydb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{

    server.use(
        "/graphql",
        graphqlHTTP({
          graphiql: true,
          schema,
        })
      );

    app.listen(4000, ()=>{
        console.log("Server is running ")
    
    })

}).catch((err)=>{

  console.log("Cant connect to database")
})



