import { reactive } from "vue";

export const store = reactive({
  apiMovieURL: "https://api.themoviedb.org/3/search/movie",
  apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
  apiKey: "ecefa99d5c01586d7b23c8f2d49a06ae",
  searchKey: "",
  movies: [],
  series: [],
  loading: false,
});
