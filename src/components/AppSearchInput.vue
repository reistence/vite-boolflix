<script>
import { store } from "../store.js";
export default {
  name: "AppSearchInput",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <input type="text" v-model="this.store.searchKey" />
</template>
<style lang="scss" scoped></style>
