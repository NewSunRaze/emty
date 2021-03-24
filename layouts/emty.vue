<template>
  <div>
    <mobileModal></mobileModal>
    <appHeader></appHeader>
    <Nuxt class="main" />
    <appFooter></appFooter>
  </div>
</template>

<script>
import mobileModal from "@/components/mobileModal.vue";
import appHeader from "@/components/appHeader.vue";
import appFooter from "../components/appFooter.vue";
export default {
  components: {
    mobileModal,
    appHeader,
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
