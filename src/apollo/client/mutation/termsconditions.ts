import { gql } from '@apollo/client';

export const NEWUPDATETERMSCONDITIONS = gql`
  mutation newUpdateTermsConditions($input: InputTermsConditions) {
    newUpdateTermsConditions(input: $input) {
      terms
      conditions
    }
  }
`;
