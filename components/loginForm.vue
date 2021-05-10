<template>
  <div class="container">
    <h1>Sign in to your account</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="login.login"
          type="email"
          placeholder="mail@example.com"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="login.password"
          placeholder="Password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <div class="btn_cont">
        <b-button @click.prevent="localAuth" variant="dark" class="but"
          >Sign in</b-button
        >
        <b-button @click.prevent="fetchAuth" variant="dark" class="but"
          >testbtn</b-button
        >
        <nuxt-link to="/auth/signup">or Sign Up</nuxt-link>
      </div>
      <p class="error">{{ error }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        login: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    async localAuth() {
      await this.$auth.loginWith("local", {
        data: {
          'email': this.login.login,
          'password': this.login.password
        }
      });
    },
    async fetchAuth() {
        const rezult = await this.$axios.$post("auth/login",{
          "email": "test123@mail.ru",
          "password": "test1q"
        })
      console.log(rezult);
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.checked = [];
    },
    onSubmit(event) {}
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
}
h1 {
  margin-bottom: 30px;
  text-align: center;
  margin-top: 20px;
}
.btn_cont {
  margin-top: 30px;
}
.but {
  background: black;
  padding: 5px 30px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  margin-right: 30px;
}
a {
  color: #eed3e3;
}
.error {
  margin-top: 15px;
  color: red;
}
</style>
