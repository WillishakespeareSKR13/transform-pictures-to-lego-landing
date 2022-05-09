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

export const GETCOLORBYID = gql`
  query getColorByID($id: ID!) {
    getColorById(id: $id) {
      id
      color
      name
      icon
    }
  }
`;

export const UPDATECOLOR = gql`
  mutation updateColor($id: ID!, $input: InputColor) {
    updateColor(id: $id, input: $input) {
      id
      color
      name
      icon
    }
  }
`;

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
