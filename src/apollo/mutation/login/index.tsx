import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      bearer
      me {
        id
        access {
          id
          code
          level
        }
        user {
          id
          firstname
          lastname
          fullname
          email
          username
          isstaff
          isactive
          issuperuser
          lastlogin
        }
        picture
      }
    }
  }
`;
