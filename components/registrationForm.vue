<template>
  <div class="container">
    <h1>Create an account</h1>
    <div class="form_container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" flex class="form">
        <b-form-group
          class="mb-3"
          id="input-group-2"
          label="Your Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
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
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mb-3"
          id="input-group-3"
          label="Password:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group> -->

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            variant="dark"
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <div class="btn_cont">
          <b-button @click="onSubmit" variant="dark" class="but"
            >Sign Up</b-button
          >
          <nuxt-link to="/auth/login">or Sign in</nuxt-link>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      this.$router.push("/");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
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
