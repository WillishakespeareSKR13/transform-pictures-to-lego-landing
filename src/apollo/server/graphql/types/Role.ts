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
`;

export default typeDefs;
