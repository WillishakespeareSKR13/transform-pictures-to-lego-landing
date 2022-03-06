import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: InputLogin) {
    login(input: $input) {
      token
    }
  }
`;
