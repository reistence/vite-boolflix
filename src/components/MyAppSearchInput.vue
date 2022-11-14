<script>
import { store } from "../store.js";
export default {
  name: "MyAppSearchInput",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <input type="text" v-model="this.store.searchKey" id="user-search" />
</template>
<style lang="scss" scoped></style>
