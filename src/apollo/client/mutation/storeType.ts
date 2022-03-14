import { gql } from '@apollo/client';

export const NEWSTORETYPE = gql`
  mutation newStoreType($input: InputStoreType) {
    newStoreType(input: $input) {
      id
      name
    }
  }
`;

export const UPDATESTORETYPE = gql`
  mutation updateStoreType($id: ID!, $input: InputStoreType) {
    updateStoreType(id: $id, input: $input) {
      id
      name
    }
  }
`;

export const DELETESTORETYPE = gql`
  mutation deleteStoreType($id: ID!) {
    deleteStoreType(id: $id) {
      id
    }
  }
`;
