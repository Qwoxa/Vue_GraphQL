<template>
  <div id="app">
    <BooksList @showDetails="setBookId($event)" />
    <BookDetails v-if="bookId" :bookId="bookId" />
    <AddBook />
  </div>
</template>

<script>
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

export default {
  name: "app",
  components: {
    BooksList,
    BookDetails,
    AddBook
  },
  data() {
    return {
      bookId: "",
      setBookId(newBookId) {
        this.bookId = newBookId;
      }
    };
  }
};
</script>

<style>
</style>
