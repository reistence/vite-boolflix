<script>
import { store } from "../store";
import AppSearchInput from "./AppSearchInput.vue";

export default {
  name: "AppHeader",
  components: AppSearchInput,
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="header-left">
        <div class="logo">
          <h1>Boolflix</h1>
        </div>
      </div>
      <div class="header-right">
        <AppSearchInput></AppSearchInput>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  width: 95%;
  padding: 0.2em 0.5em;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
