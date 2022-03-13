import { gql } from '@apollo/client';

export const GET_BOARDS = gql`
  query getBoards {
    getBoards {
      id
      type {
        id
        name
      }
      title
      description
      price
      currency
      image
      sizes {
        id
        aspect
        title
        type {
          id
          name
        }
        x
        y
        isPortrait
        size {
          width
          height
        }
      }
    }
  }
`;
