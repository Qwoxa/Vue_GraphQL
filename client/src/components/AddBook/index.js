import React, { useState } from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation
} from "../../queries/queries";

const initialState = { name: "", genre: "", authorId: "" };

const AddBook = ({
  getAuthorsQuery: { loading, authors },
  addBookMutation
}) => {
  const [fields, setFields] = useState(initialState);

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await addBookMutation({
      variables: fields,
      refetchQueries: [
        {
          query: getBooksQuery
        }
      ]
    });
    setFields(initialState);
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <h1>Add New Book</h1>
      <div className="field">
        <label htmlFor="name">Book name:</label>
        <input
          type="text"
          id="name"
          value={fields.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={fields.genre}
          onChange={handleChange}
          name="genre"
        />
      </div>

      <div className="field">
        <label htmlFor="author">Author: </label>
        <select
          id="author"
          value={fields.authorId}
          onChange={handleChange}
          name="authorId"
        >
          {loading && (
            <option value="" disabled>
              Loading authors..
            </option>
          )}

          <option defaultValue="">Select author</option>

          {!loading &&
            authors.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
