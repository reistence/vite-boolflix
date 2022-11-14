<script>
import { store } from "../store";
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
  <input
    type="text"
    v-model="store.searchKey"
    name="user-search"
    id="user-search"
  />
  <button @click="$emit('performSearch')">Search</button>
</template>
<style lang="scss" scoped></style>
