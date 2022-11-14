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
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1em;
}
input {
  width: 50%;
  padding: 0.3em 0.5em;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}
button {
  background-color: red;
  padding: 0.5em 1em;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
}
</style>
