import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type ColorColorsSaleOrder {
    color: Color
    Quantity: Int
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
    Quantity: Int
  }

  input InputColorSaleOrder {
    id: ID
    colors: [InputColorColorsSaleOrder]
    total: Int
    store: ID
  }

  input FilterColorColorsSaleOrder {
    color: ID
    Quantity: Int
  }

  input FilterColorSaleOrder {
    id: ID
    colors: [FilterColorColorsSaleOrder]
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
