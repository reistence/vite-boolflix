<script>
export default {
  name: "AppResultCard",
};
</script>

<template>
  <div class="card">
    <h1>Titolo</h1>
    <h2>titolo originale</h2>
    <h3>lang</h3>
    <h3>voto</h3>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 6 - 1em);
}
</style>
