<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="light" class="px-5">
      <b-navbar-brand size="large" class="logo">int.</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
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
        <b-navbar-nav class="ml-auto">
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
.logo {
  font-size: 2.5rem;
  color: black !important;
  font-weight: bold;
}
.profile_icon {
  width: 25px;
}
</style>
