<template>
  <div>
    <appHeader></appHeader>
    <filters></filters>
    <Nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import filters from "../components/filters.vue";
export default {
  components: {
    appHeader,
    filters
  }
};
</script>

<style></style>
