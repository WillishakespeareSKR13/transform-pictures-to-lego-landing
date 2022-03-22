import { gql } from '@apollo/client';

export const GETCOLORS = gql`
  query getColors {
    getColors {
      id
      color
      name
      icon
    }
  }
`;

export const GETCOLORSALEBYID = gql`
  query getColorSaleOrderById($id: ID!) {
    getColorSaleOrderById(id: $id) {
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
    }
  }
`;

export const GETCOLORSALEORDERS = gql`
  query getColorSaleOrders($filter: FilterColorSaleOrder) {
    getColorSaleOrders(filter: $filter) {
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
      }
    }
  }
`;
