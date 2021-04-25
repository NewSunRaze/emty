<template>
    <b-sidebar id="sidebar-1" title="Sidebar" left shadow width="250px" body-class="modal_main">
        <div v-if="!this.$store.state.auth.loggedIn">
          <nuxt-link to="/auth/login">Log In</nuxt-link>
          <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/profile/1/">Profile</nuxt-link>
          <nuxt-link to="/profile/1/ads">Ads</nuxt-link>
          <nuxt-link to="/profile/1/notification">Notification</nuxt-link>
        </div>

        <div><btn class="but">Donat</btn></div>

        <div class="">
          <a class="admin_mail" href="mailto:test@mail.ru">
            <img src="@/assets/common/send_black.svg" alt="" />
            <span>admin@int.consulting</span>
          </a>
          <div class="copyright">
            <p>© int.2020</p>
          </div>
        </div>
    </b-sidebar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
  },
  computed: {
    mobileModal() {
      return this.$store.getters["modalsStore/getMobileModal"];
    },
  }
};
</script>

<style scoped>
.container {
  justify-content: center !important;
}
.modal_main{
  display: flex;
  justify-content: center !important;
}
.modal_main div {
  margin-top: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  font-size: 18px;
}

.modal_main div a {
  text-align: center;
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
