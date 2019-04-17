
/*
* GraphQL schema and Querys
*
*/

//Dependencies
const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType,
   GraphQLString,
  GraphQLSchema,
  GraphQLID
   } = graphql;

//Dummy database
const books = [
  {name : 'Name of the wind', genre : 'Fantasy', id : '1'},
  {name : 'Game of thrones', genre : 'Drama', id :'2'},
  {name : 'Into the badlands', genre : 'Sci-Fi', id : '3'},
  {name : 'How to kill a mockingbird', genre : 'Adventure', id : '4'}

]





//Wireframe for the book object
const BookType = new GraphQLObjectType({
  name : 'Book',
  fields :() => ({
    id : { type : GraphQLID },
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
      args : { id : { type : GraphQLID}},
      resolve(parent,args){
        // find the data asked for
        return _.find(books,{id : args.id})
      }
    }
  }
})

//Graph's Schema exportation
module.exports = new GraphQLSchema({
  query : RootQuery
})
