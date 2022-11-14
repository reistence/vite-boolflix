<script>
import AppResultCard from "./AppResultCard.vue";

export default {
  name: "AppResultList",
  components: AppResultCard,
};
</script>

<template>
  <section>
    <h2>Movies</h2>
    <div class="row">
      <AppResultCard></AppResultCard>
    </div>
  </section>

  <section>
    <h2>TV-Series</h2>
    <div class="row">
      <AppResultCard></AppResultCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}
</style>
