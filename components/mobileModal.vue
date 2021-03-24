<template>
  <div class="modal" v-show="mobileModal">
    <div class="cont">
      <div v-if="!this.$store.state.auth.loggedIn">
        <nuxt-link to="/auth/login">Log In</nuxt-link>
        <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/profile/1/">Profile</nuxt-link>
        <nuxt-link to="/profile/1/ads">Ads</nuxt-link>
        <nuxt-link to="/profile/1/notification">Notification</nuxt-link>
      </div>
    </div>
    <div class="but">Donat</div>

    <div class="">
      <a class="admin_mail" href="mailto:test@mail.ru">
        <img src="@/assets/common/send_black.svg" alt="" />
        <span>admin@int.consulting</span>
      </a>
      <div class="copyright">
        <p>© int.2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    mobileModal() {
      return this.$store.getters["firstPage/firstPageStore/getMobileModal"];
    }
  }
};
</script>

<style scoped>
.container {
  justify-content: center !important;
}
.modal {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0%;
  left: 0%;
  width: 70%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 0px 50px rgba(26, 30, 38, 0.1);
  z-index: 99;
}
.cont div {
  margin-top: 10vh;
  width: 100%;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  font-size: 18px;
}

.cont div a {
  text-align: right;
  margin-bottom: 45px;
}
.but {
  background: black;
  padding: 3px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 18vh;
}
p {
  text-align: center;
}
</style>
