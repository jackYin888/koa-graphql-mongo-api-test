const { GraphQLObjectType, GraphQLString } = require('graphql');
const addCat = require('./addCat');
const updateCat = require('./updateCat');
const deleteCat = require('./deleteCat');
const Mutation = new GraphQLObjectType({
  name: 'Operation',
  fields: {
    addCat,
    updateCat,
    deleteCat,
  },
});
module.exports = Mutation;
