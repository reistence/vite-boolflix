<script>
import { store } from "../store";
import axios from "axios";

import MyAppSearchInput from "./MyAppSearchInput.vue";

export default {
  name: "AppHeader",
  components: {
    MyAppSearchInput,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getContent() {
      let moviesUrl = store.apiMovieURL;
      let serieUrl = store.apiSeriesURL;

      const params = {
        api_key: store.apiKey,
      };
      if (this.store.searchKey !== "") {
        params.query = this.store.searchKey;
      }

      axios
        .get(moviesUrl, {
          params: params,
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          console.log(this.store.movies);

          // if (store.movies[0].original_language === "en") {
          //   store.movies[0].original_language = "../assets/img/flags/en.png";
          //   console.log(store.movies[0].original_language);
          // }
        });
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="header-left">
        <div class="logo">
          <h1>Boolflix</h1>
        </div>
      </div>
      <div class="header-right">
        <MyAppSearchInput @performSearch="getContent"></MyAppSearchInput>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  width: 95%;
  padding: 0.2em 0.5em;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
