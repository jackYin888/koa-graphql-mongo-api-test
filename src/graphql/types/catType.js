const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const CatType = new GraphQLObjectType({
  name: 'Cat',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
    dateOfPurchase: { type: GraphQLString },
  }),
});

module.exports = CatType;
