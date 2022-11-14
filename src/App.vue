<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppSearchInput from "./components/AppSearchInput.vue";
import AppResultList from "./components/AppResultList.vue";
import AppResultCard from "./components/AppResultCard.vue";

export default {
  components: {
    AppHeader,
    AppSearchInput,
    AppResultList,
    AppResultCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {},
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppResultList></AppResultList>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
