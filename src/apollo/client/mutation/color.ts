import { gql } from '@apollo/client';

export const NEWCOLOR = gql`
  mutation newColor($input: InputColor) {
    newColor(input: $input) {
      id
      color
      name
      icon
    }
  }
`;
