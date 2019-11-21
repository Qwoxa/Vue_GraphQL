<template>
  <div id="books-list">
    <div
      class="book-item"
      v-for="book in books"
      :key="book.id"
      @click="showDetails(book.id)"
    >{{ book.name }}</div>
  </div>
</template>


<script>
import { getBooks } from "../queries";
export default {
  props: {
    showDetails: {
      type: Function,
      required: true
    }
  },
  apollo: {
    books: getBooks
  },
  data() {
    return {
      books: []
    };
  }
};
</script>


<style scoped>
#books-list {
  max-width: 50%;
  min-width: 300px;
}

.book-item {
  background-color: #e1bb80;
  color: #352208;
  border: 1px solid #352208;
  display: inline-block;
  max-width: 100px;
  padding: 5px 8px;
  margin: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
</style>