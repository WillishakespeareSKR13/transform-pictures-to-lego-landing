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

export const UPDATE_ROOM = gql`
  mutation updateRoom($id: ID!, $input: InputRoom) {
    updateRoom(id: $id, input: $input) {
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

export const NEW_ROOM = gql`
  mutation newRoom($input: InputRoom) {
    newRoom(input: $input) {
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

export const DELETE_ROOM = gql`
  mutation deleteRoom($id: ID!) {
    deleteRoom(id: $id) {
      id
    }
  }
`;
