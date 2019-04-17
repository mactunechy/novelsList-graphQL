const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//Wireframe for the book object
const BookType = new GraphQLObjectType({
  name : 'Book',
  fields :() => ({
    id : { type : GraphQLString },
    name : { type : GraphQLString },
    genre : { type : GraphQLString}

  })
})

//Root query - entry point to the graph
const RootQuery  = new GraphQLObjectType({
  name : 'RootQueryType',
  fields : {
    book :{
      type : BookType,
      args : { id : GraphQLString},
      resolve(parent,args){
        //Code to interact with the database
      }
    }
  }
})

//Graph's Schema exportation
module.exports = new GraphQLSchema({
  query : RootQuery
})
