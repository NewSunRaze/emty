<template>
  <div>
    <div class="container">
      <div class="wrap">
        <div>
          <h1>404</h1>
          <h3>¯ \ _ (ツ) _ / ¯</h3>
          <h2>Sorry, i didn't find this page</h2>
          <nuxt-link to="/"
            >Click at me and we will going at home page</nuxt-link
          >
        </div>
      </div>
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appFooter from "../components/appFooter.vue";
export default {
  components: {
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
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
}
h1 {
  font-size: 150px;
  font-weight: black;
  color: rgb(196, 196, 196);
  margin: 0;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
h3 {
  margin: 0px 0px 40px 0;
}
h2 {
  font-weight: bold;
}
.main {
  padding-bottom: 65px;
}
</style>
