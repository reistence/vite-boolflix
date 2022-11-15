<script>
import { store } from "../store";
import SeriesResultCard from "./SeriesResultCard.vue";

import ResultCard from "./ResultCard.vue";

export default {
  name: "AppResultList",
  data() {
    return {
      store,
    };
  },
  components: {
    ResultCard,
    SeriesResultCard,
  },
};
</script>

<template>
  <p
    class="entry-message"
    v-if="store.movies.length === 0 && store.series.length === 0"
  >
    Insert a query in order to search through our Film and TV Series database
  </p>
  <section v-if="store.movies.length">
    <h2>Movies</h2>
    <p>{{ store.movies.length }} match found</p>
    <div class="row">
      <ResultCard
        v-for="(movie, index) in store.movies"
        :key="index"
        :item="movie"
      ></ResultCard>
    </div>
  </section>

  <section v-if="store.series.length">
    <h2>TV-Series</h2>
    <p>{{ store.series.length }} match found</p>
    <div class="row">
      <ResultCard
        v-for="(show, index) in store.series"
        :key="index"
        :item="show"
      ></ResultCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.entry-message {
  width: 90%;
  margin: 0 auto;
  text-align: center;
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
