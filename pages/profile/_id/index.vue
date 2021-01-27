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
          <p>Your name</p>
          <input type="text" />
        </div>
        <div>
          <p>Your mail</p>
          <input type="text" />
        </div>
        <div>
          <p>Your password</p>
          <input type="password" />
        </div>
      </div>
      <div class="btn_cont">
        <button>Save changes</button>
      </div>
      <div class="signout">
        <p>Sign out</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile",
  data() {
    return {
      file: []
    };
  },
  methods: {
    onFileChange() {
      const files = this.$refs.image.files;
      const data = new FormData();
      data.append("logo", files[0]);
      this.file = data;
      console.log(this.file);
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
