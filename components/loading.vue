<template>
  <div class="d-flex justify-content-center mb-3">
    <b-spinner v-show="show" label="Loading..."></b-spinner>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      default() {
        return false;
      }
    }
  }
};
</script>

<style></style>
