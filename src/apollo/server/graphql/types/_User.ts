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
    photo: String
    emailVerified: Boolean
    disabled: Boolean
    birthdate: String
    role: Role
    store: [Store]
  }

  type TokenUser {
    token: String
  }

  #######################INPUT#######################

  input InputUser {
    name: String
    lastname: String
    nickname: String
    email: String
    password: String
    photo: String
    emailVerified: Boolean
    disabled: Boolean
    birthdate: String
    role: ID
    store: [ID]
  }

  input FilterUser {
    id: ID
    name: String
    lastname: String
    nickname: String
    email: String
    password: String
    photo: String
    emailVerified: Boolean
    disabled: Boolean
    birthdate: String
    role: String
    store: [String]
  }

  input InputLogin {
    email: String!
    password: String!
  }

  #######################QUERY#######################
  extend type Query {
    me: User
    getUsers(filter: FilterUser): [User]
    getUserById(id: ID!): User
  }
  #####################MUTACION######################
  extend type Mutation {
    newUser(input: InputUser): User
    updateUser(id: ID!, input: InputUser): User
    login(input: InputLogin): TokenUser
  }
`;

export default typeDefs;
