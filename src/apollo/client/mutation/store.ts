import { gql } from '@apollo/client';

export const NEWSTORE = gql`
  mutation newStore($input: InputStore) {
    newStore(input: $input) {
      id
    }
  }
`;
