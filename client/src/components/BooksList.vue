<template>
  <div id="books-list">
    <div
      class="book-item"
      v-for="book in books"
      :key="book.id"
      @click="setToShow(book.id)"
    >{{ book.name }}</div>
  </div>
</template>


<script>
import { getBooks } from "../graphql";

export default {
  apollo: {
    books: {
      query: getBooks
    }
  },
  props: {
    showDetails: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    setToShow(newValue) {
      this.$emit("showDetails", newValue);
    }
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