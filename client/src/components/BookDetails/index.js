import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../../queries/queries";

const BookDetails = ({ data: { book } }) => {
  console.log(book);
  return (
    <div id="book-details">
      {!book && <p>No book selected..</p>}

      {book && (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(b => (
              <li key={b.id}>{b.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default graphql(getBookQuery, {
  options: ({ bookId }) => ({ variables: { id: bookId } })
})(BookDetails);
