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
