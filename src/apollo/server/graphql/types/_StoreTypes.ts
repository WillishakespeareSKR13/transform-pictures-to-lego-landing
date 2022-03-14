import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type StoreType {
    id: ID
    name: String
  }

  #######################INPUT#######################

  input InputStoreType {
    name: String!
  }

  input FilterStoreType {
    id: ID
    name: String
  }

  #######################QUERY#######################
  extend type Query {
    getStoreTypes: [StoreType]
    getStoreTypeById(id: ID!): StoreType
  }

  #######################MUTACION######################
  extend type Mutation {
    newStoreType(input: InputStoreType): StoreType
    updateStoreType(id: ID!, input: InputStoreType): StoreType
    deleteStoreType(id: ID!): StoreType
  }
`;

export default typeDefs;
