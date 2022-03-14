import { gql } from '@apollo/client';

export const GET_ROOM_SIZES = gql`
  query getRoomSizes {
    getRoomSizes {
      key {
        id
        name
      }
      sizes {
        key {
          id
          name
        }
        width
        height
        max
      }
    }
  }
`;

export const GET_ROOM_TYPES = gql`
  query getRooms {
    getRooms {
      id
      key
      title
      image
      offset {
        key {
          id
          name
        }
        top
      }
    }
  }
`;
