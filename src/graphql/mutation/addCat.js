const { GraphQLString } = require('graphql');
const CatType = require('../types/catType');
const Cat = require('../../models/cat');

module.exports = {
  type: CatType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    const newCat = new Cat({
      name: args.name,
      price: args.price,
      dateOfPurchase: new Date().getTime(),
    });
    return newCat.save();
  },
};
