import { gql } from '@apollo/client';

export const USER = gql`
  query me {
    me {
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
      }
    }
  }
`;

export const GETUSERS = gql`
  query getUsers($filter: FilterUser) {
    getUsers(filter: $filter) {
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
