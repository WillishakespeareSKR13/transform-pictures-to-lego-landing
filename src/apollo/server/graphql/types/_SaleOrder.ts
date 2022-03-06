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
`;

export default typeDefs;
