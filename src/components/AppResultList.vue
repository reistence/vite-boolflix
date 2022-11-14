<script>
import { store } from "../store";
import SeriesResultCard from "./SeriesResultCard.vue";

import AppResultCard from "./AppResultCard.vue";

export default {
  name: "AppResultList",
  data() {
    return {
      store,
    };
  },
  components: {
    AppResultCard,
    SeriesResultCard,
  },
};
</script>

<template>
  <section>
    <h2>Movies</h2>
    <div class="row">
      <AppResultCard
        v-for="(movie, index) in store.movies"
        :key="index"
        :movie="movie"
      ></AppResultCard>
    </div>
  </section>

  <section>
    <h2>TV-Series</h2>
    <div class="row">
      <SeriesResultCard
        v-for="(show, index) in store.series"
        :key="index"
        :show="show"
      ></SeriesResultCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  flex-wrap: wrap;
  width: 100%;
}
</style>
