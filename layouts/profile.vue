<template>
  <div>
    <appHeader></appHeader>
    <profileNav></profileNav>
    <Nuxt />
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import profileNav from "@/components/profileNav.vue";
import appFooter from "../components/appFooter.vue";
export default {
  components: {
    appHeader,
    profileNav,
    appFooter
  }
};
</script>
