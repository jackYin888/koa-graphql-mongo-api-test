const { GraphQLString } = require('graphql');
const CatType = require('../types/catType');
const Cat = require('../../models/cat');

module.exports = {
  type: CatType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    let cat = await Cat.findById(args.id);
    cat.name = args.name;
    cat.price = args.price;

    return cat.save();
  },
};
