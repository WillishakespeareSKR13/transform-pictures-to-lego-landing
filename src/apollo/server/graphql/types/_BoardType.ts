import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type BoardType {
    id: ID
    name: String
  }

  #######################INPUT#######################

  input InputBoardType {
    name: String!
  }

  #######################QUERY#######################
  extend type Query {
    getBoardTypes: [BoardType]
    getBoardTypeById(id: ID!): BoardType
  }

  #######################MUTACION######################
  extend type Mutation {
    newBoardType(input: InputBoardType): BoardType
    updateBoardType(id: ID!, input: InputBoardType): BoardType
  }
`;

export default typeDefs;
