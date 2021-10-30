const express = require('express')
const mongoose = require('mongoose')
const Schema = require("./graphql/schema.js");
const { graphqlHTTP } = require('express-graphql');
const app = express();
       
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    // rootValue: root,
    graphiql: true,
  }));

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/mydb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{

    // app.use("/graphql",graphqlHTTP({graphiql: true,schema,}));
    if(result){

        app.listen(4000, ()=>{
        console.log("Server is running ")

        })
    }else[

        console.log('Failed cant connect')
    ]

}).catch((err)=>{
  console.log("Cant connect to database")
})



