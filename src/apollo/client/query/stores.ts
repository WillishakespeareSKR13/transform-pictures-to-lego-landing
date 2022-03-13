import { gql } from '@apollo/client';

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
