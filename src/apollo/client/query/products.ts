import { gql } from '@apollo/client';

export const GETPRODUCTS = gql`
  query getProducts($filter: FilterProduct) {
    getProducts(filter: $filter) {
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

// export const DELETEPRODUCT = gql`

// `;
