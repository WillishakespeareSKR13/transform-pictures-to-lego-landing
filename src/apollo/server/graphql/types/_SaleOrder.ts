import { gql } from 'apollo-server-micro';

// stripeId: string;
// secret: string;
// product: ObjectId;
// board: ObjectId;
// quantity: number;
// total: number;
// status: string;

const typeDefs = gql`
  #######################TYPES#######################

  type SaleOrder {
    id: ID
    stripeId: String
    secret: String
    product: String
    board: String
    customer: User
    quantity: Int
    total: Int
    currency: String
    status: String
  }

  #######################INPUT#######################

  input InputSaleOrder {
    product: String
    board: String
    quantity: Int
    customer: String
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
