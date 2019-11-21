import { gql } from "apollo-boost";

export const getBooks = gql`
  {
    books {
      id
      name
    }
  }
`;

export const getBook = gql`
query ($id: ID!) {
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
`