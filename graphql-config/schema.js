exports.typeDefs = `
type User {
  username: String!
  password: String!
  email: String!
  joinDate: String
  favorites: [Recipe]
}

type Recipe {
  name: String!
  category: String!
  description: String!
  instructions: String!
  createDate: String
  likes: Int
  username: String!
}

type Query {
  getAllRecipes: [Recipe]
}

type Mutation {
  addRecipe(
    name: String!,
    category: String!,
    description: String!,
    instructions: String!,
    createDate: String,
    likes: Int,
    username: String!
  ): Recipe
}
`;
