<template>
  <div id="book-details">
    <div v-if="book">
      <h2>Name: {{ book.name }}</h2>
      <p>Genre: {{ book.genre }}</p>

      <p id="author">Author: {{ book.author.name }}</p>
      <ul v-if="book.author.books.length">
        Another author's books:
        <li v-for="authorBook in book.author.books" :key="authorBook.name">{{ authorBook.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBook } from "../graphql";

export default {
  data() {
    return {
      book: {}
    };
  },
  apollo: {
    book: {
      query: getBook,
      variables() {
        return {
          id: this.bookId
        };
      }
    }
  }
};
</script>

<style>
#book-details {
  width: 50%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
  border: 2px solid #352208;
  height: 25vh;
}

#book-details ul {
  padding: 0;
}

#book-details li {
  list-style-position: inside;
  padding-left: 10px;
}

#author {
  text-align: right;
}
</style>