const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const CatType = require('./types/catType');
const Cat = require('../models/cat');
const Mutation = require('./mutation');
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    cat: {
      type: CatType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Cat.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
