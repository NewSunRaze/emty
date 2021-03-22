<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-12 col-lg-3 my-col">
        <div class="row">
          <nuxt-link to="/profile/1/">Profile</nuxt-link>
          <nuxt-link to="/profile/1/ads">Ads</nuxt-link>
          <nuxt-link to="/profile/1/notification">Notification</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 760px) {
  .my-col {
    padding-left: 0 !important;
  }
}
.container-fluid {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
.centered {
  align-items: center;
}
.row {
  justify-content: space-between;
}
.my-col {
  padding-left: 30px;
}
a:hover {
  text-decoration: none;
}
</style>
