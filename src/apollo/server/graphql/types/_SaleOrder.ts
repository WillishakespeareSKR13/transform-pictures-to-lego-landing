import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type SaleOrder {
    id: ID
    stripeId: String
    secret: String
    number: String
    product: [Products]
    board: [BoardSelected]
    customer: User
    store: Store
    quantity: Int
    total: Float
    currency: String
    status: String
    colorsaleorder: [ColorSaleOrder]
    createdAt: String
  }

  #######################INPUT#######################
  input InputProductQuantity {
    id: ID
    quantity: Int
  }

  input InputSaleOrder {
    product: [String]
    board: [InputBoardSelected]
    store: String
    customer: String
    colorsaleorder: [String]
    price: Float
    productQuantity: [InputProductQuantity]
  }

  input FilterSaleOrder {
    id: ID
    stripeId: String
    secret: String
    product: [String]
    board: [String]
    customer: String
    store: String
    quantity: Int
    total: Int
    currency: String
    status: String
    colorsaleorder: [String]
  }
  #######################QUERY#######################

  extend type Query {
    getSaleOrders(filter: FilterSaleOrder): [SaleOrder]
    getSaleOrderById(id: ID!): SaleOrder
    paySaleOrder(id: ID!): SaleOrder
    paySaleOrderCash(id: ID!): SaleOrder
  }
  #####################MUTACION######################
  extend type Mutation {
    newSaleOrder(input: InputSaleOrder): SaleOrder
    newSaleOrderCash(input: InputSaleOrder): SaleOrder
    updateSaleOrder(id: ID!, input: InputSaleOrder): SaleOrder
  }
`;

export default typeDefs;
