<template>
  <div>
    <appHeader></appHeader>
    <filters></filters>
    <Nuxt />
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import filters from "../components/filters.vue";
import appFooter from "../components/appFooter.vue";
export default {
  components: {
    appHeader,
    filters,
    appFooter
  }
};
</script>

<style scoped></style>
