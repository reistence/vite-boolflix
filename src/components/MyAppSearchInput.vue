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
  <div>
    <input
      type="text"
      v-model="store.searchKey"
      name="user-search"
      id="user-search"
    />
    <button @click="$emit('performSearch')">Search</button>
  </div>
</template>
<style lang="scss" scoped></style>
