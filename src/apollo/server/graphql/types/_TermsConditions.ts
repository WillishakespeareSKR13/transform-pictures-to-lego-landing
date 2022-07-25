import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type TermsConditions {
    terms: String
    conditions: String
  }

  #######################INPUT#######################

  input InputTermsConditions {
    terms: String
    conditions: String
  }

  #######################QUERY#######################
  extend type Query {
    getTermsConditions: TermsConditions
  }

  #######################MUTACION######################
  extend type Mutation {
    newUpdateTermsConditions(input: InputTermsConditions): TermsConditions
  }
`;

export default typeDefs;
