import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Store {
    id: ID
    name: String
    numberoffice: Int
    numberstore: Int
    description: String
    phone: String
    email: String
    website: String
    photo: String
    cash: Float
    currency: String
    street: String
    city: String
    state: String
    zip: String
    storeType: StoreType
  }

  #######################INPUT#######################

  input InputStore {
    name: String
    numberoffice: Int
    numberstore: Int
    description: String
    phone: String
    email: String
    website: String
    photo: String
    cash: Float
    currency: String
    street: String
    city: String
    state: String
    zip: String
    storeType: ID
  }

  input FilterStore {
    id: ID
    name: String
    description: String
    phone: String
    email: String
    website: String
    photo: String
    cash: Float
    currency: String
    street: String
    city: String
    state: String
    zip: String
    storeType: String
  }

  #######################QUERY#######################
  extend type Query {
    getStores: [Store]
    getStoreById(id: ID!): Store
  }

  #######################MUTACION######################
  extend type Mutation {
    newStore(input: InputStore): Store
    updateStore(id: ID!, input: InputStore): Store
    deleteStore(id: ID!): Store
  }
`;

export default typeDefs;
