<template>
  <div>
    <optionsModal></optionsModal>
    <appHeader></appHeader>
    <filters></filters>
    <Nuxt class="main" />
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import filters from "../components/filters.vue";
import appFooter from "../components/appFooter.vue";
import optionsModal from "@/components/optionsModal.vue";
export default {
  components: {
    appHeader,
    filters,
    appFooter,
    optionsModal
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
