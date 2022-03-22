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
    }
  }
`;
