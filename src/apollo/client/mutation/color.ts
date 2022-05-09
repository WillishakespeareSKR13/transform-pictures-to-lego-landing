import { gql } from '@apollo/client';

export const NEWCOLOR = gql`
  mutation newColor($input: InputColor) {
    newColor(input: $input) {
      id
      color
      name
      icon
    }
  }
`;

export const UPDATECOLOR = gql`
  mutation updateColor($input: InputColor, $id: ID!) {
    updateColor(input: $input, id: $id) {
      id
      color
      name
      icon
    }
  }
`;

export const DELETECOLOR = gql`
  mutation deleteColor($id: ID!) {
    deleteColor(id: $id) {
      id
      color
      name
      icon
    }
  }
`;

export const NEWCOLORSALEORDER = gql`
  mutation newColorSaleOrder($input: InputColorSaleOrder) {
    newColorSaleOrder(input: $input) {
      id
      colors {
        id
        color {
          id
          color
          name
          icon
        }
        quantity
      }
      total
      store {
        id
        name
      }
    }
  }
`;
