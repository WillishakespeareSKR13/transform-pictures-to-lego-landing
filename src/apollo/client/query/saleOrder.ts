import { gql } from '@apollo/client';

export const GETSALEORDES = gql`
  query getSaleOrder($filter: FilterSaleOrder) {
    getSaleOrders(filter: $filter) {
      id
      stripeId
      secret
      createdAt
      product {
        id
        name
      }
      board {
        id
        pdf
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
      colorsaleorder {
        id
        colors {
          id
          color {
            id
            color
            name
          }
          quantity
        }
        total
      }
    }
  }
`;

export const GETSALEORDERBYID = gql`
  query getSaleOrderById($id: ID!) {
    getSaleOrderById(id: $id) {
      id
      number
      stripeId
      secret
      product {
        id
        name
        sku
        price
        currency
      }
      board {
        id
        pdf
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
          price
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
      colorsaleorder {
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
      }
    }
  }
`;

export const PAYSALEORDER = gql`
  query paySaleOrder($id: ID!) {
    paySaleOrder(id: $id) {
      id
      stripeId
      secret
      board {
        id
        pdf
      }
    }
  }
`;

export const PAYSALEORDERCASH = gql`
  query paySaleOrderCash($id: ID!) {
    paySaleOrderCash(id: $id) {
      id
      stripeId
      secret
      board {
        id
        pdf
      }
    }
  }
`;
