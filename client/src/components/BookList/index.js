import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from '../../queries/queries';
import BookDetails from "../BookDetails";

const BookList = ({ data: { books, loading } }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h1>Book List</h1>
      <ul id="book-list">
        {loading && <div>Loading data..</div>}
        
        {!loading && books.map(b => <li onClick={() => setSelected(b.id)} key={b.id}>{b.name}</li>)}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
