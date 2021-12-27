import { gql } from '@apollo/client';

export const USER = gql`
  query me {
    me {
      id
      access {
        name
        code
        level
      }
      partner {
        id
        name
        description
        email
        phone
      }
      user {
        id
        fullname
        firstname
        lastname
        email
        isstaff
        issuperuser
        salesOrders {
          id
          payment
          price
          number
          status
          sendstatus
          guidenumber
          mailingaddress
          saleinporder {
            id
            quantity
            product {
              id
              name
              price
              model
              description
              modeldate
              category {
                id
                name
              }
              subcategory {
                id
                name
              }
              productinattachment {
                id
                url
              }
            }
          }
        }
      }
      profileinmailingaddress {
        id
        name
        street
        numint
        numext
        suburb
        town
        state
        cp
      }
    }
  }
`;

export const LISTUSER = gql`
  query listProfile {
    listProfile {
      id
      user {
        id
        email
        fullname
        username
        lastlogin
        isactive
      }
      access {
        code
      }
      partner {
        code
      }
      birthdate
    }
  }
`;
