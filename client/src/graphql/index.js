import { gql } from "apollo-boost";

export const getBooks = gql`
  query getBooks {
    books {
      id
      name
    }
  }
`;

export const getBook = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      name
      id
      genre
      author {
        name
        books {
          name
        }
      }
    }
  }
`;
