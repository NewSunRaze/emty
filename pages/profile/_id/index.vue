<template>
  <div class="container center">
    <div class="items_container">
      <div class="img_cont">
        <div class="download_container">
          <div class="img_radius">
            <img src="@/assets/common/profileLogo.jpg" alt="" />
          </div>
          <p>Upload</p>
          <input ref="image" type="file" @change="onFileChange" />
        </div>
      </div>
      <div class="inputs_container">
        <div>
          <p>Your first name</p>
          <input type="text" v-model="first_name" />
        </div>
        <div>
          <p>Your last name</p>
          <input type="text" v-model="last_name" />
        </div>
        <div>
          <p>Your mail</p>
          <input type="text" v-model="email" />
        </div>
        <div>
          <p>Your password</p>
          <input type="password" v-model="password" />
        </div>
      </div>
      <div class="btn_cont">
        <button @click="send()">Save changes</button>
      </div>
      <div class="signout">
        <p @click="$auth.logout()">Sign out</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile",
  middleware: "auth",
  data() {
    return {
      first_name: this.$store.state.auth.user.first_name,
      last_name: this.$store.state.auth.user.last_name,
      email: this.$store.state.auth.user.email,
      password: "*************",
      file: []
    };
  },
  methods: {
    async logout() {
      try {
        const response = await this.$auth.logout();
      } catch (e) {
        console.log(e);
      }
    },
    onFileChange() {
      const files = this.$refs.image.files;
      const data = new FormData();
      data.append("logo", files[0]);
      this.file = data;
    },
    async send() {
      try {
        const response = await this.$axios.$post("change_profile", {
          data: {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            file: this.file
          }
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      console.log(this.first_name, this.last_name, this.email, this.file);
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .container {
    padding-top: 25px !important;
  }
  .btn_cont {
    display: flex;
    justify-content: center;
  }
  .items_container {
    width: 80% !important;
  }
}

.signout {
  margin-top: 35px;
  cursor: pointer;
}
.signout p {
  text-align: center;
  color: black;
}
button {
  background: black;
  padding: 5px 30px;
  color: white;
  border-radius: 5px;
  margin-top: 50px;
  border: 1px solid black;
}
.inputs_container div input {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
}
.download_container {
  position: relative;
  overflow: hidden;
}
.download_container p {
  margin: 0 0 5px 0;
  color: #eed3e3;
  text-align: center;
}
.inputs_container div {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.inputs_container {
  display: flex;
  flex-direction: column;
}
.img_radius {
  border-radius: 50%;
}
.img_cont input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  cursor: pointer;
  opacity: 0;
}
.img_cont .download_container {
  /* cursor: pointer; */
  display: flex;
  flex-direction: column;
}
.img_cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img_cont p {
  color: #eed3e3;
}
.container {
  flex-direction: column;
  padding-top: 60px;
}
.items_container {
  width: 30%;
}
</style>
