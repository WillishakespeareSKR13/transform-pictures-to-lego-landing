import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Color {
    id: ID
    color: String
    name: String
    icon: String
  }

  #######################INPUT#######################

  input InputColor {
    color: String!
    name: String!
    icon: String!
  }

  input FilterColor {
    id: ID
    color: String
    name: String
    icon: String
  }

  #######################QUERY#######################
  extend type Query {
    getColors: [Color]
    getColorById(id: ID!): Color
  }

  #######################MUTACION######################
  extend type Mutation {
    newColor(input: InputColor): Color
    updateColor(id: ID!, input: InputColor): Color
    deleteColor(id: ID!): Color
  }
`;

export default typeDefs;
