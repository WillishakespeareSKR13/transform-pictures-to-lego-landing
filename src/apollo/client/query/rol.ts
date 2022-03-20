import { gql } from '@apollo/client';

export const GETROLES = gql`
  query getRoles {
    getRoles {
      id
      name
    }
  }
`;
