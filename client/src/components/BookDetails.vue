<template>
  <div id="book-details">
    <div v-if="book"></div>
  </div>
</template>

<script>
import { getBook } from "../queries";

export default {
  props: {
    bookId: {
      type: String,
      required: true
    }
  },
  apollo: {
    book: {
      query: getBook,
      variables: {
        id: this.bookId
      }
    }
  },
  data() {
    return {
      book: {}
    };
  }
};
</script>