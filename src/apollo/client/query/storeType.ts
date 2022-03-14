import { gql } from '@apollo/client';

export const GETSTORETYPES = gql`
  query getStoreTypes {
    getStoreTypes {
      id
      name
    }
  }
`;
