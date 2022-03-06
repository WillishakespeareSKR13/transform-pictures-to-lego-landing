import { gql } from '@apollo/client';

export const NEWSALEORDER = gql`
  mutation newSaleOrder($input: InputSaleOrder) {
    newSaleOrder(input: $input) {
      id
      stripeId
      secret
      product
      size
      quantity
      price
      status
    }
  }
`;
