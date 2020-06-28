exports.resolvers = {
  Query: {
    getAllRecipes: () => {}
  },
  Mutation: {
    async addRecipe(root, {
      name,
      category,
      description,
      instructions,
      createDate,
      likes,
      username
    }, { Recipe }) {
      const newRecipe = await new Recipe({
        name,
        category,
        description,
        instructions,
        createDate,
        likes,
        username
      }).save();
      return newRecipe;
    }
  },
};
