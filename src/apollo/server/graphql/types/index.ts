import { gql } from 'apollo-server-micro';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';

const typeDefs = gql`
  ${User}
  ${Role}
  ${SaleOrder}

  #######################QUERY#######################
  type Query {
    me: User
    getUsers: [User]
    getUserById(id: ID!): User

    getRoles: [Role]
    getRoleById(id: ID!): Role

    getSaleOrders: [SaleOrder]
    getSaleOrderById(id: ID!): SaleOrder
  }
  #####################MUTACION######################
  type Mutation {
    newUser(input: InputUser): User
    login(input: InputLogin): TokenUser

    newRole(input: InputRole): Role

    newSaleOrder(input: InputSaleOrder): SaleOrder
    updateSaleOrder(id: ID!, input: InputSaleOrder): SaleOrder
  }
`;

export default typeDefs;
