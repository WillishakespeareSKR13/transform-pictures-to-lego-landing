import { gql } from '@apollo/client';

export const GETSALEORDES = gql`
  query getSaleOrder($filter: FilterSaleOrder) {
    getSaleOrders(filter: $filter) {
      id
      stripeId
      secret
      product {
        id
      }
      board {
        id
        type {
          id
          name
        }
        price
        currency
        title
        description
        image
        sizes {
          id
          aspect
          title
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
      customer {
        id
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
