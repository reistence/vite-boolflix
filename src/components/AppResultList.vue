<script>
import { store } from "../store";
import axios from "axios";

// import SeriesResultCard from "./SeriesResultCard.vue";

import ResultCard from "./ResultCard.vue";

export default {
  name: "AppResultList",
  data() {
    return {
      store,
      movieGenreList: [],
      tvGenreList: [],
    };
  },
  components: {
    ResultCard,
    // SeriesResultCard,
  },
  created() {
    const params = {
      api_key: store.apiKey,
    };

    let movieGenreListUrl = `https://api.themoviedb.org/3/genre/movie/list`;
    let tvGenreListUrl = `https://api.themoviedb.org/3/genre/tv/list`;

    axios
      .get(movieGenreListUrl, {
        params: params,
      })
      .then((resp) => {
        this.movieGenreList = resp.data.genres;
        // console.log(this.movieGenreList);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(tvGenreListUrl, {
        params: params,
      })
      .then((resp) => {
        this.tvGenreList = resp.data.genres;
        // console.log(this.tvGenreList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    filterMovies() {
      store.filteredMovies = store.movies.filter((movie) =>
        movie.genre_ids.includes(store.selectedMovieGenre.id)
      );
      // console.log(store.filteredMovies);
      return store.filteredMovies;
    },
    filterTvSeries() {
      store.filteredTvSeries = store.series.filter((serie) =>
        serie.genre_ids.includes(store.selectedTvGenre.id)
      );
      // console.log(store.filteredTvSeries);
      return store.filteredTvSeries;
    },
  },
};
</script>

<template>
  <p
    class="entry-message"
    v-if="store.movies.length === 0 && store.series.length === 0"
  >
    Welcome!<br />Insert a query in order to search through our Film and TV
    Series database
  </p>
  <!-- FILTERS INPUT-->
  <div v-else class="filters">
    <div>
      <label for="movie-genres-list">Movies: </label>
      <select
        name="movie-genres-list"
        id="movieGenresList"
        v-model="store.selectedMovieGenre"
        @change="filterMovies"
      >
        <option value="">Choose a Genre</option>
        <option v-for="genre in this.movieGenreList" :value="genre">
          {{ genre.name }}
        </option>
      </select>
    </div>

    <div>
      <label for="tv-genres-list">Tv-Series: </label>
      <select
        name="tv-genres-list"
        id="tvGenresList"
        v-model="store.selectedTvGenre"
        @change="filterTvSeries"
      >
        <option value="">Choose a Genre</option>
        <option v-for="genre in this.tvGenreList" :value="genre">
          {{ genre.name }}
        </option>
      </select>
    </div>
  </div>
  <!-- /FILTERS INPUT-->
  <!-- FILM SECTION NO GENRE -->
  <section v-if="store.movies.length && !store.filteredMovies.length">
    <h2>Movies</h2>
    <p>
      {{ store.movies.length }}
      {{ store.movies.length === 1 ? "match" : "matches" }} found
    </p>
    <p v-if="!store.filteredMovies.length && store.selectedMovieGenre">
      No movie matches this genre
    </p>

    <div class="row" v-if="store.movies.length">
      <ResultCard
        v-for="(movie, index) in store.movies"
        :key="index"
        :item="movie"
      ></ResultCard>
    </div>
  </section>
  <!-- /FILM SECTION NO GENRE -->
  <!-- FILM SECTION + GENRE -->
  <section v-if="store.filteredMovies.length">
    <h2>Movies</h2>
    <p>
      {{ store.filteredMovies.length }}
      {{ store.filteredMovies.length === 1 ? "match" : "matches" }} found
    </p>

    <div class="row">
      <ResultCard
        v-for="(movie, index) in store.filteredMovies"
        :key="index"
        :item="movie"
      ></ResultCard>
    </div>
  </section>
  <!-- /FILM SECTION + GENRE -->
  <!-- TV SERIES SECTION NO GENRE -->

  <section v-if="store.series.length && !store.filteredTvSeries.length">
    <h2>TV-Series</h2>
    <p>
      {{ store.series.length }}
      {{ store.series.length === 1 ? "match" : "matches" }} found
    </p>
    <p v-if="!store.filteredTvSeries.length && store.selectedTvGenre">
      No Tv series match this genre
    </p>

    <div class="row" v-if="store.series.length">
      <ResultCard
        v-for="(show, index) in store.series"
        :key="index"
        :item="show"
      ></ResultCard>
    </div>
  </section>
  <!-- /TV SERIES SECTION NO GENRE -->

  <!-- TV SERIES SECTION + GENRE -->
  <section v-if="store.filteredTvSeries.length">
    <h2>Tv Series</h2>
    <p>
      {{ store.filteredTvSeries.length }}
      {{ store.filteredTvSeries.length === 1 ? "match" : "matches" }} found
    </p>

    <div class="row">
      <ResultCard
        v-for="(show, index) in store.filteredTvSeries"
        :key="index"
        :item="show"
      ></ResultCard>
    </div>
  </section>
  <!-- /TV SERIES SECTION + GENRE -->
</template>

<style lang="scss" scoped>
.entry-message {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.filters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  select {
    background-color: red;
    padding: 0.2em 0.5em;
    border-radius: 15px;
    color: white;
    margin-left: 0.5em;
  }
}

section {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;

  p {
    color: rgb(172, 160, 160);
    margin-bottom: 1em;
  }
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
}
</style>
