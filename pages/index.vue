<template>
  <div class="container">
    <loading v-bind:show="loading" v-if="loading" />

    <div v-else>
      <project-list />
      <!-- <offers-list /> -->
    </div>
  </div>
</template>

<script>
import loading from "../components/loading.vue";
import OffersList from "../components/offersList.vue";
import Posts from "../components/Posts.vue";
import projectList from "../components/projectList.vue";
export default {
  components: { projectList, OffersList },
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
  outline: none !important;
}
body {
  height: 100vh;
  color: #222;
}
a {
  color: black;
}
a:link {
  color: none; /* Цвет ссылок */
}
a:hover {
  color: #bb9532;
  text-shadow: 1px 1px 1px #bb9532;
  color: none; /* Цвет ссылки */
  text-decoration: none;
}
</style>
