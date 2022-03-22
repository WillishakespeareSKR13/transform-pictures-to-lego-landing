import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type ColorColorsSaleOrder {
    id: ID
    color: Color
    quantity: Int
  }

  type ColorSaleOrder {
    id: ID
    colors: [ColorColorsSaleOrder]
    total: Int
    store: Store
  }

  #######################INPUT#######################

  input InputColorColorsSaleOrder {
    color: ID
    quantity: Int
  }

  input InputColorSaleOrder {
    colors: [InputColorColorsSaleOrder]
    store: ID
  }

  input FilterColorSaleOrder {
    id: ID
    colors: [String]
    total: Int
    store: ID
  }

  #######################QUERY#######################
  extend type Query {
    getColorSaleOrders(filter: FilterColorSaleOrder): [ColorSaleOrder]
    getColorSaleOrderById(id: ID!): ColorSaleOrder
  }

  #####################MUTACION######################
  extend type Mutation {
    newColorSaleOrder(input: InputColorSaleOrder): ColorSaleOrder
    updateColorSaleOrder(id: ID!, input: InputColorSaleOrder): ColorSaleOrder
    deleteColorSaleOrder(id: ID!): ColorSaleOrder
  }
`;

export default typeDefs;
