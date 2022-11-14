<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
// import MyAppSearchInput from "./components/MyAppSearchInput.vue";
import AppResultList from "./components/AppResultList.vue";
// import AppResultCard from "./components/AppResultCard.vue";

export default {
  components: {
    AppHeader,
    // MyAppSearchInput,
    AppResultList,
    // AppResultCard,
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
main {
  padding: 3em 0;
}
</style>
