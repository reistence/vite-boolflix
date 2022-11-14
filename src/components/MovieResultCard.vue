<script>
export default {
  name: "MovieResultCard",
  props: {
    movie: Object,
  },
  data() {
    return {};
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
    <img
      class="thumbnail"
      :src="`https://image.tmdb.org/t/p/w342` + movie.backdrop_path"
      alt=""
    />

    <div class="card-txt">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.original_title }}</p>
      <div class="language">
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
      <p>
        {{ getRating(movie.vote_average) }}

        <i
          v-for="n in getRating(movie.vote_average)"
          class="fa-solid fa-star"
        ></i>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5 - 1em);
  border: 1px solid rgb(53, 49, 49);
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .thumbnail {
    height: 100%;
    object-fit: cover;
  }
  .card-txt {
    position: absolute;
    padding: 0.5em;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.461);
    display: none;

    .language {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
      width: 100%;
      height: 30px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover .card-txt {
    display: block;
    z-index: 999;
  }
  &:hover {
    transform: rotate3d(180deg);
  }
}
</style>
