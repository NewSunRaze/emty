<template>
  <div class="container">
    <loading v-bind:show="loading" v-if="loading" />

    <div v-else>
      <Posts />
    </div>
  </div>
</template>

<script>
import loading from "../components/loading.vue";
import Posts from "../components/Posts.vue";
export default {
  async fetch({ store }) {
    await store.dispatch("posts/fetchPosts");
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  font-family: "Roboto", arial, sans-serif;
  color: #222;
}
</style>
