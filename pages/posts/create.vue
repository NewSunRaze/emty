<template>
  <div class="container center">
    <div class="create_post_container">
      <toggle-input bg="black" />
      <div class="inputs_container">
        <div class="input_wrapper">
          <input type="text" placeholder="Title" />
        </div>
        <div class="input_wrapper">
          <input type="text" placeholder="Amount in dollars" />
          <div><img src="@/assets/common/non_paid.svg" alt="" /></div>
        </div>
        <div class="input_wrapper">
          <input type="text" placeholder="Region" />
          <div><img src="@/assets/common/navigation.svg" alt="" /></div>
        </div>
        <div class="input_wrapper">
          <input type="text" placeholder="Industry" />
          <div><img src="@/assets/common/industry.svg" alt="" /></div>
        </div>
        <div class="add_files">
          <div class="file-upload">
            <input type="file" />
          </div>
          <div class="file-upload">
            <input type="file" />
          </div>
          <div class="file-upload">
            <input type="file" />
          </div>
        </div>
        <textarea type="text" placeholder="Type description" />
        <button>+ Add new project</button>
      </div>
    </div>
  </div>
</template>

<script>
import toggleInput from "../../components/toggleInput.vue";
export default {
  components: { toggleInput },
  data() {
    return {};
  }
};
</script>
<style scoped>
@media only screen and (max-width: 960px) {
  .create_post_container {
    width: 100% !important;
  }
  .inputs_container {
    width: 100%;
  }
}
.add_files {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.add_files input {
  margin: 0;
}

.file-upload {
  cursor: pointer;
  display: block;
  position: relative;
  overflow: hidden;
  margin: 10px;
  width: 40px;
  height: 40px;
}
.file-upload:nth-child(1) {
  background: url("~assets/lists/pdf.svg");
}
.file-upload:nth-child(2) {
  background: url("~assets/lists/xlsx.svg");
}
.file-upload:nth-child(3) {
  background: url("~assets/lists/com.svg");
}
.file-upload input {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 1;
  cursor: pointer;
}
textarea {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0;
  opacity: 1;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  overflow: auto;
  resize: none;
  padding: 10px 15px;
  border: 1px solid #eed3e3;
  border-radius: 5px;
}
textarea::placeholder {
  color: #eed3e3;
}
.inputs_container {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.inputs_container input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #eed3e3;
  border-radius: 5px;
}
.input_wrapper {
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
}
.input_wrapper div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 10px;
  width: 30px;
  height: 100%;
}
h1 {
  text-align: center;
}
.create_post_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  width: 70%;
}
button {
  background: black;
  color: white;
  width: 100%;
  outline: none;
  padding: 7px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 50px;
  outline: none;
  border: 1px solid black;
}
input::placeholder {
  color: #eed3e3;
}
</style>
