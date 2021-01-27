<template>
  <div>
    <appHeader></appHeader>
    <Nuxt />
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appFooter from "../components/appFooter.vue";
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>
