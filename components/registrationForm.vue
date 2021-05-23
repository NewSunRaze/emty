<template>
  <div class="container">
    <h1>Create an account</h1>
    <div class="form_container">
      <b-form flex class="form">
        <b-form-group
          class="mb-3"
          id="input-group-2"
          label="Your Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            aria-describedby="input-1-live-feedback"
            placeholder="Enter name"
            aria-placeholder="test"
          ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          class="mb-3"
          id="input-group-2"
          label="Email address:"
          label-for="input-2"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-2"
            v-model.trim="$v.form.email.$model"
            :state="validateState('email')"
            type="email"
            placeholder="Enter email"
          ></b-form-input>
          <b-form-invalid-feedback id="input-2-live-feedback">This is a required field and must be email.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-group-3"
          label="Password:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model.trim="$v.form.password.$model"
            :state="validateState('password')"
            type="password"
            aria-describedby="input-3-live-feedback"
            placeholder="Enter password"
          ></b-form-input>
          <b-form-invalid-feedback id="input-3-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>
        <div class="btn_cont">
          <b-button @click.prevent="submit" variant="dark" class="but"
            >Sign Up</b-button
          >
          <nuxt-link to="/auth/login">or Sign in</nuxt-link>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      name: {
        required,
      },
      password: {
        required,
      }
    }
  },
  methods: {
    validateState(params) {
      const { $dirty, $error } = this.$v.form[params];
      return $dirty ? !$error : null;
    },
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      try{
        this.$axios.$post('/auth/registration',{
          "email": this.form.email,
          "login": this.form.name,
          "password": this.form.password
        }).then(responce =>{
          this.$auth.loginWith("local", {
            data: {
              'email': this.form.email,
              'password': this.form.password
            }
          });
        })
      }
      catch(e){
        alert(123)
          // this.$bvToast.toast(`We have an error: ${e}`, {
          //   title: 'Ops...',
          //   variant: 'danger',
          //   autoHideDelay: 5000,
          //   appendToast: false
          // })
      }
    },
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
}
h1 {
  text-align: center;
  margin-top: 20px;
}
.but {
  background: black;
  padding: 5px 30px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  margin-right: 30px;
}
.btn_cont {
  margin-top: 30px;
  margin-bottom: 30px;
}
.form {
  margin-top: 20px;
}
a {
  color: #eed3e3;
}
</style>
