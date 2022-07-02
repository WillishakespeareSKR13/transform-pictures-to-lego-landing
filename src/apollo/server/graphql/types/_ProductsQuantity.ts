import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################
  type ProductQuantityProduct {
    id: ID
    quantity: Int
  }

  type ProductQuantity {
    id: ID
    saleOrder: SaleOrder
    products: [ProductQuantityProduct]
  }

  extend type Query {
    getProductQuantityBySaleOrder(id: ID!): ProductQuantity
  }
`;

export default typeDefs;
