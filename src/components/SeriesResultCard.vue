<script>
export default {
  name: "SeriesResultCard",
  props: {
    show: Object,
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
      :src="`https://image.tmdb.org/t/p/w342` + show.backdrop_path"
      alt=""
    />
    <div class="card-txt">
      <h1>{{ show.name }}</h1>
      <p v-show="show.name != show.original_name">{{ show.original_name }}</p>
      <div class="language">
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
      <div class="description">{{ show.overview }}</div>
      <h3>
        <!-- {{ getRating(show.vote_average) }} -->

        <i
          v-for="n in getRating(show.vote_average)"
          class="fa-solid fa-star"
        ></i>
        <i
          v-for="n in 5 - getRating(show.vote_average)"
          class="fa-regular fa-star"
        ></i>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
  width: calc(100% / 5 - 2.5em / 5);
  // border: 1px solid rgb(53, 49, 49);
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .thumbnail {
    height: 100%;
    object-fit: cover;
    transform: perspective(600px) rotateY(0deg);
    backface-visibility: hidden;

    transition: transform 0.6s linear;
  }
  .card-txt {
    position: absolute;
    padding: 0.5em;
    gap: 0;
    height: 97%;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
    left: 0;
    top: 0;
    background-color: rgba(66, 60, 60, 0.816);
    display: flex;
    transform: perspective(600px) rotateY(180deg);
    backface-visibility: hidden;
    transition: transform 0.6s linear;
    & > * {
      margin: 0.1em;
    }

    .language {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
      width: 100%;
      height: 30px;
      img {
        width: 20px;

        object-fit: cover;
      }
    }
    .description {
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: rgb(172, 160, 160);
    }
  }

  &:hover > .thumbnail {
    transform: perspective(600px) rotateY(-180deg);
  }
  &:hover > .card-txt {
    transform: perspective(600px) rotateY(0deg);
  }
}
@media screen and (max-width: 870px) {
  .card {
    width: calc(100% / 3 - 1.5em / 3);
  }
}
@media screen and (max-width: 550px) {
  .card {
    width: calc(100% / 2 - 1em / 2);
  }
}
@media screen and (max-width: 320px) {
  .card {
    width: calc(100% / 1 - 0.5em);
  }
}
</style>
