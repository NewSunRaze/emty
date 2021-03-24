<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <nuxt-link to="/profile/1/">Profile</nuxt-link>
        <nuxt-link to="/profile/1/ads">Ads</nuxt-link>
        <nuxt-link to="/profile/1/notification">Notification</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 760px) {
  a:nth-child(1) {
    margin-left: 0px !important;
  }
  a {
    padding-right: 0px !important;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
}
.container-fluid {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
a:nth-child(1) {
  margin-left: 80px;
}
a {
  padding-right: 50px;
}
a:hover {
  text-decoration: none;
}
</style>
