<script>
export default {
  name: "AppResultCard",
  props: {
    movie: Object,
  },
  data() {
    return {
      starRating: 0,
    };
  },
  methods: {
    getRating(num) {
      for (let i = 0; i <= num; i++) {
        if (num >= i) {
          console.log("piena");
        } else {
          console.log("mezza");
        }
      }
      console.log(num);
    },
  },
};
</script>

<template>
  <div class="card">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.original_title }}</p>
    <div>
      Language:
      <img
        v-if="movie.original_language === 'en'"
        src="../assets/img/flags/en.png"
        :alt="movie.orignal_language"
      />
      <img
        v-if="movie.original_language === 'de'"
        src="../assets/img/flags/de.png"
        :alt="movie.orignal_language"
      />
      <img
        v-if="movie.original_language === 'it'"
        src="../assets/img/flags/it.png"
        :alt="movie.orignal_language"
      />
      <img
        v-if="movie.original_language === 'fr'"
        src="../assets/img/flags/fra.png"
        :alt="movie.orignal_language"
      />
      <img
        v-if="movie.original_language === 'es'"
        src="../assets/img/flags/esp.png"
        :alt="movie.orignal_language"
      />

      <span
        v-else-if="
          movie.original_language != 'en' &&
          movie.original_language != 'de' &&
          movie.original_language != 'fr' &&
          movie.original_language != 'it' &&
          movie.original_language != 'es'
        "
      >
        {{ movie.original_language }}</span
      >
    </div>
    <!-- <h3>
      <i
        v-for="(star, index) in movie.vote_average"
        :key="index"
        class="fa-solid fa-star"
      ></i>
    </h3> -->
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
