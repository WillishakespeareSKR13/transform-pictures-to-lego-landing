import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type BoardSelected {
    id: ID
    board: Board
    size: BoardSize
  }

  #######################INPUT#######################

  input InputBoardSelected {
    board: ID
    size: ID
  }

  input FilterBoardSelected {
    id: ID
    board: ID
    size: ID
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
