<template>
  <div id="add-book">
    <form @click.prevent="addBook">
      <input type="text" v-model="form.name" placeholder="Book title.." />
      <input type="text" v-model="form.genre" placeholder="Book genre.." />
      <select v-model="form.authorId">
        <option v-if="$apollo.loading" selected>Loading authors..</option>
        <option v-else>Select author</option>
        <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.name }}</option>
      </select>
    </form>
  </div>
</template>


<script>
import { gql } from "apollo-boost";

export default {
  apollo: {
    authors: gql`
      query getAuthors {
        authors {
          id
          name
        }
      }
    `
  },
  methods: {
    addBook() {}
  },
  data() {
    return {
      form: {
        name: "",
        genre: "",
        authorId: ""
      }
    };
  }
};
</script>

<style>
#add-book {
  position: absolute;
  bottom: 0;
  height: 200px;
  left: 0;
}

#add-book input,
#add-book select {
  display: block;
  margin: 10px;
  border-radius: 5px;
  padding: 4px;
  border: 1px solid #352208;
}
</style>