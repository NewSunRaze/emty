<template>
  <div class="container-fluid">
    <div class="container">
      <nuxt-link class="logo col-9 offset-1 col-lg-1 offset-lg-0" to="/"
        ><h1 class="logo">int.</h1></nuxt-link
      >
      <toggle-input class="col-lg-2 toggle"></toggle-input>
      <div class="mobile_nav col-1" @click="changeMobileModalShowing">
        <img src="@/assets/common/chevron_left.svg" alt="" />
      </div>
      <div class="main_nav offset-lg-8 col-lg-1">
        <b-nav-item-dropdown
          right
          type="dark"
          variant="dark"
          menu-class="my-dropdown"
        >
          <template #button-content>
            <img class="profile_icon" src="~/assets/header/avatar.svg" alt="" />
          </template>

          <div v-if="!this.$store.state.auth.loggedIn">
            <b-dropdown-item to="/auth/login">Log In</b-dropdown-item>
            <b-dropdown-item to="/auth/signup">Sign Up</b-dropdown-item>
          </div>
          <div v-else>
            <b-dropdown-item to="/profile/1">Profile</b-dropdown-item>
            <b-dropdown-item to="/profile/1/ads">Adds</b-dropdown-item>
            <b-dropdown-item to="/profile/1/notification"
              >Notifications</b-dropdown-item
            >
            <b-dropdown-item @click="$auth.logout()" class="gold"
              >Log out</b-dropdown-item
            >
          </div>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          right
          type="dark"
          variant="dark"
          menu-class="my-dropdown"
        >
          <template #button-content>
            <em
              ><img class="profile_icon" src="~/assets/header/dollar.svg" alt=""
            /></em>
          </template>

          <b-dropdown-item to="/">Home</b-dropdown-item>
          <b-dropdown-item to="/second">Second page</b-dropdown-item>
          <b-dropdown-item to="/auth/login">login</b-dropdown-item>
          <b-dropdown-item to="/auth/signup">Signup</b-dropdown-item>
          <b-dropdown-item to="/profile/1/ads">Adds</b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    changeMobileModalShowing() {
      this.$store.dispatch("firstPage/firstPageStore/callChangeMobileModal");
    }
  }
};
</script>
<style scoped>
@media only screen and (max-width: 480px) {
  .logo {
    text-align: center;
    order: 1;
    padding-left: 20px;
  }
  .main_nav {
    display: none !important;
  }
  .mobile_nav {
    order: 2;
    display: flex !important;
  }
  .toggle {
    order: 3;
    margin: auto;
  }
}
.container {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  flex-wrap: wrap;
  padding: 4px 0;
}
.logo {
  font-size: 2.7rem !important;
  color: black !important;
  font-weight: bold !important;
}
.logo h1 {
  margin: 0;
}
.logo:hover {
  color: black !important;
  box-shadow: none !important;
  text-decoration: none !important;
}
.mobile_nav {
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: #1a1e26;
}
.main_nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_nav img {
  cursor: pointer;
}
.gold {
  color: #bb9532 !important;
}
.gold:hover {
  color: #61490e !important;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.b-dropdown-item {
  background: red !important;
  color: white !important;
}
</style>
