import { gql } from 'apollo-server-micro';
import User from './User';
import Role from './Role';

const typeDefs = gql`
  ${User}
  ${Role}

  #######################QUERY#######################
  type Query {
    me: User
    getUsers: [User]
    getUserById(id: ID!): User

    getRoles: [Role]
    getRoleById(id: ID!): Role
  }
  #####################MUTACION######################
  type Mutation {
    newUser(input: InputUser): User
    login(input: InputLogin): TokenUser

    newRole(input: InputRole): Role
  }
`;

export default typeDefs;
