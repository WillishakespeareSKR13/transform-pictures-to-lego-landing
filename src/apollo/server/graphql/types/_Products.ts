import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Products {
    id: ID
    name: String
    price: Float
    description: String
    sku: String
    stock: Int
    image: String
    store: Store
  }

  #######################INPUT#######################

  input InputProduct {
    name: String
    price: Float
    description: String
    sku: String
    stock: Int
    image: String
    store: ID
  }

  #######################QUERY#######################

  extend type Query {
    getProducts: [Products]
    getProductById(id: ID!): Products
  }

  #####################MUTACION######################
  extend type Mutation {
    newProduct(input: InputProduct): Products
    updateProduct(id: ID!, input: InputProduct): Products
  }
`;

export default typeDefs;