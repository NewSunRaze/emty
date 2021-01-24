<template>
  <div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
      class="container-fluid"
    >
      <div class="container">
        <b-navbar-brand size="medium" class="logo col-1" to="/">int.</b-navbar-brand>

        <toggle-input class="col-6 col-sm-5 col-xl-3 col-lg-3"></toggle-input>
        <b-navbar-toggle
          target="nav-collapse"
          variant="dark"
          class=""
          style=""
        ></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
          class="col-8 col-sm-4 col-md-3 col-lg-7 col-xl-8 "
        >
          <!-- Right aligned nav items -->
          <b-navbar-nav class="offset-10 col-3">
            <b-nav-item-dropdown right menu-class="my-dropdown" offset="50">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em
                  ><img class="profile_icon" src="~/assets/header/avatar.svg" alt=""
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
                  ><img class="profile_icon" src="~/assets/header/dollar.svg" alt=""
                /></em>
              </template>

              <b-dropdown-item to="/">Home</b-dropdown-item>
              <b-dropdown-item to="/second">Second page</b-dropdown-item>
              <b-dropdown-item to="/login">login</b-dropdown-item>
              <b-dropdown-item to="/signup">Signup</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
<style>
.navbar {
  background-color: #fff !important;
}
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
  font-size: 16px;
}
.logo {
  font-size: 2.7rem;
  color: black !important;
  font-weight: bold;
}
.logo:hover{
  color:black !important;
  box-shadow: none !important;
}
.profile_icon {
  width: 25px;
}
</style>
