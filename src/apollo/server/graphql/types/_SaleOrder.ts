import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type SaleOrder {
    id: ID
    stripeId: String
    secret: String
    product: String
    size: String
    quantity: Int
    price: Int
    status: String
  }

  #######################INPUT#######################

  input InputSaleOrder {
    product: String!
    size: String!
    quantity: Int
  }
  #######################QUERY#######################

  extend type Query {
    getSaleOrders: [SaleOrder]
    getSaleOrderById(id: ID!): SaleOrder
    paySaleOrder(id: ID!): SaleOrder
  }
  #####################MUTACION######################
  extend type Mutation {
    newSaleOrder(input: InputSaleOrder): SaleOrder
    updateSaleOrder(id: ID!, input: InputSaleOrder): SaleOrder
  }
`;

export default typeDefs;
