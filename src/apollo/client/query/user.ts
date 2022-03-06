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
