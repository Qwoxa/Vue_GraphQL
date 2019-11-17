import React, { useState } from "react";
import { graphql } from "react-apollo";
import * as compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation } from "../../queries/queries";

const initialState = { name: "", genre: "", author: "" };

const AddBook = ({
  getAuthorsQuery: { loading, authors },
  addBookMutation,
  addBookMutationResult
}) => {
  const [fields, setFields] = useState(initialState);

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBookMutation({ // TODO
      variables: fields
    });
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
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
          value={fields.author}
          onChange={handleChange}
          name="author"
        >
          {loading && (
            <option value="" disabled>
              Loading authors..
            </option>
          )}
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
