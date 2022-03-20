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
      currency
      image
      sizes {
        id
        aspect
        title
        price
        priority
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
