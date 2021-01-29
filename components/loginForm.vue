<template>
  <div class="container">
    <h1>Sign in to your account</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="login.username"
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
        <b-button @click.prevent="onSubmit" variant="dark" class="but"
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
      login: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.login);
      try {
        const rez = await fetch("http://5.63.157.3/login", {
          mode: "no-cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
          // body: {
          //   login: "test",
          //   password: "pass"
          // }
        });
        const response = await rez.text();
        console.log(response);

        // fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // }).then(r => {
        //   r.json().then(r => {
        //     console.log(r);
        //   });
        // });

        // let response = await this.$auth.loginWith("local", {
        //   mode: "no-cors",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   data: this.login
        // });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
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
