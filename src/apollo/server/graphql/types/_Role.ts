import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Role {
    id: ID
    name: String
  }

  #######################INPUT#######################

  input InputRole {
    name: String!
  }

  input FilterRole {
    id: ID
    name: String
  }

  #######################QUERY#######################
  extend type Query {
    getRoles: [Role]
    getRoleById(id: ID!): Role
  }

  #######################MUTACION######################
  extend type Mutation {
    newRole(input: InputRole): Role
    updateRole(id: ID!, input: InputRole): Role
  }
`;

export default typeDefs;
