import { gql } from '@apollo/client';

export const USER = gql`
  query me {
    me {
      id
      nickname
      name
      email
      role {
        id
        name
      }
    }
  }
`;

export const GETUSERS = gql`
  query getUsers {
    getUsers {
      id
      name
      lastname
      nickname
      email
      photo
      emailVerified
      disabled
      birthdate
      role {
        id
        name
      }
      store {
        id
        name
      }
    }
  }
`;

export const CREATEUSER = gql`
  mutation newUser($input: InputUser) {
    newUser(input: $input) {
      id
      name
      lastname
      nickname
      email
      password
      photo
      emailVerified
      disabled
      birthdate
      role {
        id
        name
      }
      store {
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
  }
`;
