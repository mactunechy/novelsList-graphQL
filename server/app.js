/*
* Backend for a novels web application
*/




//Dependencies
const express = require('express')
const graphqlHTTP = require('express-graphql')

//express instance
const app = express()

app.use('/graphql',graphqlHTTP({
  
}))

app.listen(4000,() => {
  console.log("Listening for requests on port 4000")
})