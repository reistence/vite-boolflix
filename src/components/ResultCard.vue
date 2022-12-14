<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ResultCard",
  props: {
    item: Object,
  },
  data() {
    return {
      store,
      mainLanguages: ["en", "de", "it", "fr", "es"],
      // empty array and flag to handle the retrieved movie cast data
      movieCast: [],
      showMovieCast: false,
      // empty array and flag to handle the retrieved tv-series cast data
      tvCast: [],
      showTvCast: false,
      // empty array and flag to handle the retrieved movie genres data
      movieGenres: [],
      showMovieGenres: false,
      // empty array and flag to handle the retrieved tv-series genres data
      tvGenres: [],
      showTvGenres: false,
      // corner case in which the selected item does not have any cast/genre info available
      noCastInfo: false,
      noGenreInfo: false,
    };
  },
  computed: {
    // distinguish between movie/series name according to the key
    getTitle() {
      return this.item.title ? this.item.title : this.item.name;
    },
    // distinguish between movie/series original name according to the key
    getOriginalTitle() {
      return this.item.original_title
        ? this.item.original_title
        : this.item.original_name;
    },
  },
  methods: {
    // process the rating of the item
    getRating(num) {
      num = Math.round(num / 2);

      return num;
    },
    // create a dynamic URL for imgs
    getImgUrl(name) {
      return new URL(`../assets/img/flags/${name}.png`, import.meta.url).href;
    },
    // retrieve movie cast
    getMovieCast(id) {
      this.showMovieCast = !this.showMovieCast;
      const params = {
        api_key: store.apiKey,
      };

      let movieCreditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;

      if (this.showMovieCast) {
        axios
          .get(movieCreditsUrl, {
            params: params,
          })
          .then((resp) => {
            this.movieCast = resp.data.cast.slice(0, 5);
            // console.log(this.movieCast);
            if (this.movieCast.length === 0) {
              this.noCastInfo = true;
            }
            return this.movieCast;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // retrieve tv-series cast
    getTvCast(id) {
      this.showTvCast = !this.showTvCast;
      const params = {
        api_key: store.apiKey,
      };

      let tvCreditsUrl = `https://api.themoviedb.org/3/tv/${id}/credits`;

      if (this.showTvCast) {
        axios
          .get(tvCreditsUrl, {
            params: params,
          })
          .then((resp) => {
            // console.log(resp.data.cast.slice(0, 5));
            this.tvCast = resp.data.cast.slice(0, 5);
            if (this.tvCast.length === 0) {
              this.noCastInfo = true;
            }
            return this.tvCast;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // retrieve movie genres
    getMovieGenres(id) {
      this.showMovieGenres = !this.showMovieGenres;

      const params = {
        api_key: store.apiKey,
      };

      let movieGenresUrl = `https://api.themoviedb.org/3/movie/${id}`;
      if (this.showMovieGenres) {
        axios
          .get(movieGenresUrl, {
            params: params,
          })
          .then((resp) => {
            this.movieGenres = resp.data.genres.slice(0, 5);
            if (this.movieGenres.length === 0) {
              this.noGenreInfo = true;
            }
            return this.movieGenres;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // retrieve tv-series genres
    getTvGenres(id) {
      this.showTvGenres = !this.showTvGenres;

      const params = {
        api_key: store.apiKey,
      };

      let tvGenresUrl = `https://api.themoviedb.org/3/tv/${id}`;
      if (this.showTvGenres) {
        axios
          .get(tvGenresUrl, {
            params: params,
          })
          .then((resp) => {
            this.tvGenres = resp.data.genres.slice(0, 5);
            if (this.tvGenres.length === 0) {
              this.noGenreInfo = true;
            }
            return this.tvGenres;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <!-- primary img -->
    <img
      v-if="item.poster_path"
      class="thumbnail"
      :src="`https://image.tmdb.org/t/p/w342` + item.poster_path"
      alt=""
    />
    <!-- secondary img -->
    <img
      v-else-if="item.backdrop_path"
      class="thumbnail"
      :src="`https://image.tmdb.org/t/p/w342` + item.backdrop_path"
      alt=""
    />
    <!-- alternative img if not present in the api db -->
    <img
      v-else
      class="thumbnail"
      src="../assets/img/flags/dark-placeholder.png"
      alt=""
    />
    <!-- CARD TEXT SECTION -->
    <div class="card-txt">
      <!-- TITLE -->
      <h3>{{ getTitle }}</h3>
      <p v-show="item.title != item.original_title">
        {{ getOriginalTitle }}
      </p>
      <!-- LANGUAGE -->
      <div class="language">
        Language:
        <img
          v-if="mainLanguages.includes(item.original_language)"
          :src="getImgUrl(item.original_language)"
          :alt="item.orignal_language"
        />

        <span v-else>{{ item.original_language }}</span>
      </div>
      <!-- DESCRIPTION -->
      <div class="description">{{ item.overview }}</div>
      <!-- RATINGS -->
      <p class="rating">
        <span>
          {{ item.vote_average }}
        </span>

        <i
          v-for="n in getRating(item.vote_average)"
          class="fa-solid fa-star"
        ></i>
        <i
          v-for="n in 5 - getRating(item.vote_average)"
          class="fa-regular fa-star"
        ></i>
      </p>
      <!-- CAST -->
      <p class="cast">
        <button
          @click="
            this.item.title
              ? this.getMovieCast(item.id)
              : this.getTvCast(item.id)
          "
        >
          Show cast:
        </button>
        <span v-show="this.showMovieCast" v-for="actor in this.movieCast"
          ><a href="">{{ actor.name }}</a
          >&nbsp;
        </span>
        <span v-show="this.noCastInfo === true">no info available</span>
        <span
          v-show="this.showTvCast"
          v-for="(actor, index) in this.tvCast"
          :key="index"
        >
          <a href="">{{ actor.name }}</a
          >&nbsp;
        </span>
      </p>
      <!-- GENRES -->
      <p class="genres">
        <button
          @click="
            this.item.title
              ? this.getMovieGenres(item.id)
              : this.getTvGenres(item.id)
          "
        >
          Show genres:
        </button>
        <span v-show="this.showMovieGenres" v-for="genre in this.movieGenres">
          <a href="">{{ genre.name }}</a
          >&nbsp;
        </span>
        <span v-show="this.noGenreInfo === true">no info available</span>
        <span v-show="this.showTvGenres" v-for="genre in this.tvGenres">
          <a href="">{{ genre.name }}</a
          >&nbsp;</span
        >
      </p>
      <!-- /CARD TEXT SECTION -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.5em;
  margin-bottom: 1em;
  width: calc(100% / 5 - 2.5em / 5);
  // border: 1px solid rgb(53, 49, 49);
  box-shadow: 3px 3px 10px rgb(0, 0, 0);
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transform: perspective(600px) rotateY(0deg);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    transition: transform 0.6s linear;
  }
  .card-txt {
    position: absolute;
    padding: 0.5em;
    gap: 0;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(66, 60, 60, 0.816);
    display: flex;
    transform: perspective(600px) rotateY(180deg);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    transition: transform 0.6s linear;
    & > * {
      margin: 0.1em;
    }

    h3 {
      font-size: 1.1rem;
    }

    .language {
      display: flex;
      font-size: 0.7rem;
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
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: rgb(172, 160, 160);
    }

    .rating {
      span {
        color: rgb(224, 20, 20);
        margin-right: 0.3em;
      }
    }

    .cast,
    .genres {
      button {
        cursor: pointer;
        color: inherit;
        border: none;
        background-color: transparent;
        margin-right: 0.5em;
      }
      span {
        font-size: 0.7rem;
        a {
          text-decoration: underline;
          color: rgb(169, 156, 156);
        }
      }
    }
  }

  &:hover > .thumbnail {
    transform: perspective(600px) rotateY(-180deg);
  }
  &:hover > .card-txt {
    transform: perspective(600px) rotateY(0deg);
  }
}
.card-txt:hover .description {
  overflow-y: scroll;
}

.card-txt:hover .cast {
  overflow-y: scroll;
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
