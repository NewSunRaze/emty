<template>
  <div class="container" v-cloak>
    <transition name="slide-fade" mode="out-in">
      <offers-list v-if="invOrTeam" />
      <project-list v-else />
    </transition>
  </div>
</template>
<script>
import OffersList from "../components/offersList.vue";
import projectList from "../components/projectList.vue";
export default {
  components: { projectList, OffersList },

  async fetch() {
    await this.$store.dispatch("firstPage/firstPageStore/fetchTeamPosts");
    await this.$store.dispatch("firstPage/firstPageStore/fetchInvestPosts");
  },
  data() {
    return {};
  },
  async mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  computed: {
    invOrTeam() {
      return this.$store.getters["firstPage/firstPageStore/getToggleMode"];
    }
  }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(5px);
  opacity: 0;
}
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
// a:link {
//   color: none; /* Цвет ссылок */
// }
// a:hover {
//   color: #bb9532;
//   text-shadow: 1px 1px 1px #bb9532;
//   color: none; /* Цвет ссылки */
//   text-decoration: none;
// }
</style>
