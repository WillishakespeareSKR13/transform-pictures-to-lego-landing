import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type BoardSelected {
    id: ID
    board: Board
    size: BoardSize
    pdf: String
  }

  #######################INPUT#######################

  input InputBoardSelected {
    board: ID
    size: ID
    pdf: String
  }

  input FilterBoardSelected {
    id: ID
    board: ID
    size: ID
    pdf: String
  }

  #######################QUERY#######################
  extend type Query {
    getBoardSelecteds: [BoardSelected]
    getBoardSelectedById(id: ID!): BoardSelected
  }

  #######################MUTACION######################
  extend type Mutation {
    newBoardSelected(input: InputBoardSelected): BoardSelected
    updateBoardSelected(id: ID!, input: InputBoardSelected): BoardSelected
  }
`;

export default typeDefs;
