import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from '../../queries/queries';

const BookList = ({ data: { books, loading } }) => {
  return (
    <div>

      <ul id="book-list">
        {loading && <div>Loading data..</div>}
        
        {!loading && books.map(b => <li key={b.id}>{b.name}</li>)}
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
