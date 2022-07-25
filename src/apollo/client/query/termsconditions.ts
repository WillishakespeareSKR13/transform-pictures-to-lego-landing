import { gql } from '@apollo/client';

export const GETTERMSCONDITIONS = gql`
  query {
    getTermsConditions {
      terms
      conditions
    }
  }
`;
