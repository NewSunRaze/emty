<template>
  <div class="container">
    <h1>Sign in to your account</h1>
    <b-form @submit.stop.prevent="submit">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="email"
          placeholder="mail@example.com"
          :state="validateState('email')"
          v-model.trim="$v.login.email.$model"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be email.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="$v.login.password.$model"
          :state="validateState('password')"
          aria-describedby="input-2-live-feedback"
          placeholder="password"
          type="password"
        ></b-form-input>
        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <div class="btn_cont">
        <b-button type="submit" variant="dark" class="but"
          >Sign in</b-button
        >
        <nuxt-link to="/auth/signup">or Sign Up</nuxt-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
    };
  },
  validations:{
    login:{
      email:{
        required,
        email
      },
      password: {
        required
      },
    }
  },
  methods: {
    validateState(params) {
      const { $dirty, $error } = this.$v.login[params];
      return $dirty ? !$error : null;
    },
    async submit() {
      this.$v.login.$touch()

      if(!this.$v.login.$error){
        try{
          this.$auth.loginWith("local", {
            data: {
              'email': this.login.email,
              'password': this.login.password
            }
          });
        }
        catch(e){
          this.$bvToast.toast(`We have an error: ${e}`, {
            title: 'Ops...',
            variant: 'danger',
            autoHideDelay: 5000,
            appendToast: false
          })
        }
      }
    },
    onReset(event) {
      event.preventDefault();
      this.login.email = "";
      this.login.password = "";
    },
  },
  created(){
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
