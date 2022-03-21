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
