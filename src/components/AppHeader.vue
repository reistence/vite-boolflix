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
      const params = {
        api_key: store.apiKey,
      };
      if (this.store.searchKey !== "") {
        params.query = this.store.searchKey;
      }

      this.getMovies(params);

      this.getTvSeries(params);
      store.selectedMovieGenre = "";
      store.selectedTvGenre = "";
      store.filteredMovies = [];
      store.filteredTvSeries = [];
    },
    getMovies(params) {
      let moviesUrl = store.apiMovieURL;
      axios
        .get(moviesUrl, {
          params: params,
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          // console.log(this.store.movies);
        });
    },

    getTvSeries(params) {
      let serieUrl = store.apiSeriesURL;

      axios
        .get(serieUrl, {
          params: params,
        })
        .then((resp) => {
          this.store.series = resp.data.results;
          // console.log(this.store.series);
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
          <a href=""
            ><img src="../assets/img/flags/netflix-logo.png" alt=""
          /></a>
        </div>
      </div>
      <div class="header-right">
        <MyAppSearchInput @performSearch="getContent"></MyAppSearchInput>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.854);
  width: 100%;
  padding: 0.5em 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.container {
  width: 95%;
  height: 100%;
  padding: 0.2em 0.5em;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: red;
}

.header-left {
  width: 20%;
  .logo {
    width: 100%;
    a {
      img {
        max-height: 5em;
        object-fit: cover;
      }
    }
  }
}
.header-right {
  width: 40%;
}

@media screen and (max-width: 580px) {
  .container {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    .header-right {
      width: 60%;
    }
  }
}
@media screen and (max-width: 440px) {
  .container {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    .header-right {
      width: 70%;
    }
  }
}
</style>
