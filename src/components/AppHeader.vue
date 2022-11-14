<script>
import { store } from "../store";
import MyAppSearchInput from "./MyAppSearchInput.vue";

export default {
  name: "AppHeader",
  components: MyAppSearchInput,
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
        <MyAppSearchInput></MyAppSearchInput>
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
