import { gql } from '@apollo/client';

export const GETSALEORDES = gql`
  query getSaleOrder($filter: FilterSaleOrder) {
    getSaleOrders(filter: $filter) {
      id
      stripeId
      secret
      product {
        id
        name
      }
      board {
        id
        board {
          id
          title
          type {
            id
            name
          }
          currency
        }
        size {
          id
          title
          type {
            id
            name
          }
        }
      }
      customer {
        id
        name
      }
      store {
        id
      }
      quantity
      total
      currency
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
