import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type User {
    id: ID
    name: String
    lastname: String
    nickname: String
    email: String
    password: String
    role: Role
    photo: String
    emailVerified: Boolean
    birthdate: String
  }

  type TokenUser {
    token: String
  }

  #######################INPUT#######################

  input InputUser {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  input InputLogin {
    email: String!
    password: String!
  }
`;

export default typeDefs;
