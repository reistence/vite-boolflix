<script>
export default {
  name: "SeriesResultCard",
  props: {
    show: Object,
  },
  data() {
    return {
      starRating: 0,
    };
  },
  methods: {
    getRating(num) {
      num = Math.round(num / 2);

      return num;
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342` + show.backdrop_path" alt="" />
    <h1>{{ show.name }}</h1>
    <p>{{ show.original_name }}</p>
    <div>
      Language:
      <img
        v-if="show.original_language === 'en'"
        src="../assets/img/flags/en.png"
        :alt="show.orignal_language"
      />
      <img
        v-if="show.original_language === 'de'"
        src="../assets/img/flags/de.png"
        :alt="show.orignal_language"
      />
      <img
        v-if="show.original_language === 'it'"
        src="../assets/img/flags/it.png"
        :alt="show.orignal_language"
      />
      <img
        v-if="show.original_language === 'fr'"
        src="../assets/img/flags/fra.png"
        :alt="show.orignal_language"
      />
      <img
        v-if="show.original_language === 'es'"
        src="../assets/img/flags/esp.png"
        :alt="show.orignal_language"
      />

      <span
        v-else-if="
          show.original_language != 'en' &&
          show.original_language != 'de' &&
          show.original_language != 'fr' &&
          show.original_language != 'it' &&
          show.original_language != 'es'
        "
      >
        {{ show.original_language }}</span
      >
    </div>
    <h3>
      {{ getRating(show.vote_average) }}

      <i v-for="n in getRating(show.vote_average)" class="fa-solid fa-star"></i>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 6 - 1em);
  border: 1px solid white;
  div {
    width: 100%;
    height: 30px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
