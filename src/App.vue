<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppResultList from "./components/AppResultList.vue";

export default {
  components: {
    AppHeader,
    AppResultList,
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
  <!-- header components that handles the search input in it-->
  <AppHeader></AppHeader>
  <main>
    <!-- main components that handles the displaying of content -->
    <AppResultList></AppResultList>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
main {
  padding: 8em 0;
  overflow-y: scroll;
  background-color: rgb(25, 25, 25);
  height: 100%;
}
</style>
