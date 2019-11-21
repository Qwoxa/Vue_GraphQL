<template>
  <div id="app">
    <BooksList :showDetails="setBookId" />
    <BookDetails :bookId="bookId" />
  </div>
</template>

<script>
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

export default {
  name: "app",
  components: {
    BooksList,
    BookDetails
  },
  data() {
    return {
      bookId: "5dd12687ee80110b80c01568",
      setBookId(newBookId) {
        this.bookId = newBookId;
      }
    };
  }
};
</script>

<style>
</style>
