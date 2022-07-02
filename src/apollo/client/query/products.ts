import { gql } from '@apollo/client';

export const GETPRODUCTS = gql`
  query getProducts($filter: FilterProduct) {
    getProducts(filter: $filter) {
      id
      name
      price
      description
      currency
      sku
      stock
      image
      color {
        id
        color
        name
        icon
      }
    }
  }
`;

export const NEWPRODUCT = gql`
  mutation newProduct($input: InputProduct) {
    newProduct(input: $input) {
      id
      name
      price
      description
      sku
      stock
      image
    }
  }
`;

export const UPDATEPRODUCT = gql`
  mutation updateProduct($input: InputProduct, $id: ID!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      price
      description
      sku
      stock
      image
    }
  }
`;

export const DELETEPRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export const GETPRODUCTQUANTITY = gql`
  query getProductQuantityBySaleOrder($id: ID!) {
    getProductQuantityBySaleOrder(id: $id) {
      id
      products {
        id
        quantity
      }
    }
  }
`;
