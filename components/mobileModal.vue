<template>
    <b-sidebar id="sidebar-1" left shadow width="250px" body-class="test">
      <div class="px-3 py-2 col">
        <div v-if="!this.$store.state.auth.loggedIn">
          <nuxt-link to="/auth/login">Log In</nuxt-link>
          <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/profile/1/">Profile</nuxt-link>
          <nuxt-link to="/profile/1/ads">Ads</nuxt-link>
          <nuxt-link to="/profile/1/notification">Notification</nuxt-link>
        </div>


        <button class="but">Donat</button>
        <div>
          <p>© int.2020</p>
          <a class="admin_mail" href="mailto:test@mail.ru">
            <img src="@/assets/common/send_black.svg" alt="" />
            <span>admin@int.consulting</span>
          </a>
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
.test{
  display: flex;
  justify-content: center;
}
.but {
  background: black;
  width: 150px;
  padding: 3px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 18vh;
}
</style>
