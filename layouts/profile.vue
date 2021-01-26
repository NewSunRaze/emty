<template>
  <div>
    <appHeader></appHeader>
    <profileNav></profileNav>
    <Nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import profileNav from "@/components/profileNav.vue";
export default {
  components: {
    appHeader,
    profileNav
  }
};
</script>

<style></style>
