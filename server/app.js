/*
* Backend for a novels web application
*/




//Dependencies
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/index');
//express instance
const app = express();

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql :true
}));

app.listen(4000,() => {
  console.log("Listening for requests on port 4000")
});
