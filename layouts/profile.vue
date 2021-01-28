<template>
  <div>
    <appHeader></appHeader>
    <profileNav></profileNav>
    <Nuxt class="main" />
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

<style scoped>
@media only screen and (max-width: 770px) {
  .main {
    padding-bottom: 150px !important;
  }
}
.main {
  padding-bottom: 65px;
}
</style>
