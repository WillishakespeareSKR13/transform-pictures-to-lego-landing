import { gql } from '@apollo/client';

export const NEWSTORE = gql`
  mutation newStore($input: InputStore) {
    newStore(input: $input) {
      id
    }
  }
`;

export const UPDATESTORE = gql`
  mutation updateStore($id: ID!, $input: InputStore) {
    updateStore(id: $id, input: $input) {
      id
    }
  }
`;

export const DELETESTORE = gql`
  mutation deleteStore($id: ID!) {
    deleteStore(id: $id) {
      id
    }
  }
`;

export const GETSTORES = gql`
  query getStores {
    getStores {
      id
      name
      description
      phone
      email
      website
      photo
      cash
      currency
      street
      city
      state
      zip
      storeType {
        id
        name
      }
    }
  }
`;

export const GETSTOREBYID = gql`
  query getStoreById($id: ID!) {
    getStoreById(id: $id) {
      id
      name
      description
      phone
      email
      website
      photo
      cash
      currency
      street
      city
      state
      zip
      storeType {
        id
        name
      }
    }
  }
`;
