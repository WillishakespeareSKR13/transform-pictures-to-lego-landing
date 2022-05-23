import { gql } from '@apollo/client';

export const NEWSALEORDER = gql`
  mutation newSaleOrder($input: InputSaleOrder) {
    newSaleOrder(input: $input) {
      id
      stripeId
      secret
      product {
        id
      }
      board {
        id
      }
      quantity
      total
      customer {
        id
        name
      }
      status
      colorsaleorder {
        id
      }
    }
  }
`;

export const NEWSALEORDERCASH = gql`
  mutation newSaleOrderCash($input: InputSaleOrder) {
    newSaleOrderCash(input: $input) {
      id
      stripeId
      secret
      product {
        id
      }
      board {
        id
      }
      quantity
      total
      customer {
        id
        name
      }
      status
      colorsaleorder {
        id
      }
    }
  }
`;
