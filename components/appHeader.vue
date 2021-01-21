<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="col-12">
      <b-navbar-brand size="medium" class="logo offset-sm-1 col-1"
        >int.</b-navbar-brand
      >

      <toggle-input class="col-6 col-sm-5 col-lg-2"></toggle-input>
      <b-navbar-toggle
        target="nav-collapse"
        variant="dark"
        class=""
        style=""
      ></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        class="col-8 col-sm-4 col-md-3 col-lg-8"
      >
        <b-navbar-nav class="col-6">
          <b-nav-item href="#">
            <NuxtLink to="/">First page</NuxtLink>
          </b-nav-item>
          <b-nav-item href="#">
            <NuxtLink to="second">Second page</NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink to="login">login</NuxtLink>
          </b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="offset-3 col-3">
          <b-nav-item-dropdown right menu-class="my-dropdown" offset="50">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em
                ><img class="profile_icon" src="~/assets/avatar.svg" alt=""
              /></em>
            </template>

            <b-dropdown-item to="login">Log In</b-dropdown-item>
            <b-dropdown-item to="signup" class="golden"
              >Sign Up</b-dropdown-item
            >
            <b-dropdown-item white href="#">Profile</b-dropdown-item>
            <b-dropdown-item white href="#">Adds</b-dropdown-item>
            <b-dropdown-item white href="#">Notifications</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right menu-class="my-dropdown">
            <template #button-content>
              <em
                ><img class="profile_icon" src="~/assets/dollar.svg" alt=""
              /></em>
            </template>

            <b-dropdown-item href="#">Something</b-dropdown-item>
            <b-dropdown-item href="#">Something</b-dropdown-item>
            <b-dropdown-item href="#">Something</b-dropdown-item>
            <b-dropdown-item href="#">Something</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
<style>
.dropdown-menu {
  background: black;
  border-radius: 7% 0% 7% 7%;
  overflow: hidden;
}
.golden {
  color: #bb9532 !important;
}
.dropdown-item {
  color: white !important;
  background: black;
  border-radius: 5% 0% 5% 5%;
}
.dropdown-item a {
  color: white !important;
}
.dropdown-item:hover {
  color: #bb9532 !important;
  background: black;
}
</style>
<style scoped>
* {
  font-weight: normal;
  font-size: 1.1rem;
}
.logo {
  font-size: 2.7rem;
  color: black !important;
  font-weight: bold;
}
.profile_icon {
  width: 25px;
}
</style>
