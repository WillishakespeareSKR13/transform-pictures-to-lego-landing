import { gql } from '@apollo/client';

export const GETSALEORDES = gql`
  query getSaleOrders {
    getSaleOrders {
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

export const PAYSALEORDER = gql`
  query paySaleOrder($id: ID!) {
    paySaleOrder(id: $id) {
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
