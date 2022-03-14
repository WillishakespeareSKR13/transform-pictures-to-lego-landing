import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type BoardSizeType {
    id: ID
    name: String
  }

  #######################INPUT#######################

  input InputBoardSizeType {
    name: String!
  }

  input FilterBoardSizeType {
    id: ID
    name: String
  }

  #######################QUERY#######################
  extend type Query {
    getBoardSizeTypes: [BoardSizeType]
    getBoardSizeTypeById(id: ID!): BoardSizeType
  }

  #######################MUTACION######################
  extend type Mutation {
    newBoardSizeType(input: InputBoardSizeType): BoardSizeType
    updateBoardSizeType(id: ID!, input: InputBoardSizeType): BoardSizeType
  }
`;

export default typeDefs;
