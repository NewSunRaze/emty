<template>
  <div class="container">
    <h1>Sign in to your account</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="mail"
          placeholder="mail@example.com"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
        </b-form-checkbox-group>
      </b-form-group>
      <div class="btn_cont">
        <b-button @click="onSubmit" variant="dark" class="but"
          >Sign in</b-button
        >
        <nuxt-link to="/auth/signup">or Sign Up</nuxt-link>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: []
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.checked = [];
    }
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
</style>
