<template>
  <div class="container center">
    <div class="create_post_container">
      <div class="container">
        <div class="toggle">
          <input type="checkbox" v-model="invOrTeam" />
          <span class="toggle_btn"></span>
          <span class="labels"></span>
          <span class="bg"></span>
        </div>
      </div>
      <div class="inputs_container">
        <div class="input_wrapper">
          <input type="text" placeholder="Title" />
        </div>
        <div class="input_wrapper">
          <input
            type="number"
            placeholder="Amount in dollars"
            :disabled="non_paid"
            v-model.number="cost"
          />
          <div>
            <img
              :src="
                this.non_paid
                  ? require('@/assets/common/non_paid_active.svg')
                  : require('@/assets/common/non_paid.svg')
              "
              @click="non_paid = !non_paid"
            />
          </div>
        </div>
        <div class="input_wrapper">
          <input type="text" placeholder="Region" />
          <div>
            <img
              src="@/assets/common/navigation.svg"
              alt=""
              @click="getOptionsModal('region')"
            />
          </div>
        </div>
        <div class="input_wrapper">
          <input type="text" placeholder="Industry" />
          <div>
            <img
              src="@/assets/common/industry.svg"
              alt=""
              @click="getOptionsModal('industry')"
            />
          </div>
        </div>
        <div class="add_files">
          <div
            class="file-upload"
            @click="upload('pdf')"
            :class="pdf ? 'uploaded' : ''"
          >
            <input type="file" ref="pdf" @change="changeHandler('pdf')" />
            <div>pdf</div>
          </div>
          <div
            class="file-upload"
            @click="upload('xlsx')"
            :class="xlsx ? 'uploaded' : ''"
          >
            <input type="file" ref="xlsx" @change="changeHandler('xlsx')" />
            <div>xlsx</div>
          </div>
        </div>
        <b-form-textarea
          id="textarea"
          v-model="description"
          placeholder="Type description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <button @click="test()">+ Add new project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      invOrTeam: false,
      pdf: "",
      xlsx: "",
      non_paid: false,
      cost: "",
      description: "",
      showAgain: true
    };
  },
  methods: {
    upload(type) {
      if (type == "pdf") {
        this.pdf == "" ? this.$refs.pdf.click() : (this.pdf = "");
      } else if (type == "xlsx") {
        this.xlsx ? (this.xlsx = "") : this.$refs.xlsx.click();
      }
    },
    changeHandler(type) {
      type == "pdf"
        ? (this.pdf = this.$refs.pdf.files[0])
        : (this.xlsx = this.$refs.xlsx.files[0]);
    },
    getOptionsModal(type) {
      if (type == "region") {
        this.$store.dispatch("modalsStore/callChengeOnRegions");
      } else {
        this.$store.dispatch("modalsStore/callChengeOnIndustry");
      }
      this.$store.dispatch("modalsStore/callChangeOptionsModalToggle");
    },
    test() {
      if (this.showAgain) {
        var informModal = {
          show: true,
          params: {
            decription:
              "Whrite the number of the won tender in the title and in description offer to the investor",
            firstBtn: false,
            secondBtn: "Ok, don`t show again"
          }
        };
      } else {
        var informModal = {
          show: true,
          params: {
            decription: "Ads in this category are paid",
            firstBtn: true,
            secondBtn: `Pay now`
          }
        };
      }

      this.$store.dispatch("modalsStore/callChangeInformModal", informModal);
    }
  },
  watch: {
    non_paid() {
      this.cost = "";
    }
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
  margin: 10px 20px;
  width: 50px;
  flex-direction: column;
  background-position: top;
  background: url("~assets/lists/addPdf.svg") no-repeat;
}
.file-upload div {
  text-align: center;
  margin-top: 55px;
}
.uploaded {
  background-image: url("~assets/lists/uploaded.svg") !important;
}
.file-upload input {
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 1;
  cursor: pointer;
}
#textarea {
  outline: none;
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0;
  opacity: 1;
  cursor: pointer;
  border-radius: 5px;
  overflow: auto;
  resize: none;
  padding: 10px 15px;
  border: 1px solid #eed3e3;
  border-radius: 5px;
}
.form-control:focus {
  box-shadow: none;
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

.container {
  display: flex;
  justify-content: center;
}
.toggle {
  position: relative;
  background: #eed3e3;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  color: white;
}
.toggle input {
  opacity: 0;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
}
.toggle .toggle_btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: white;
  border-radius: 8px;
  transition: 0.4s all;
  border: 3px solid #eed3e3;
  box-sizing: border-box;
}
.toggle .labels:before {
  content: "invest";
  position: absolute;
  transition: 0.4s all;
  top: 7px;
  left: 25px;
  color: black;
}

.toggle .labels:after {
  text-align: center;
  vertical-align: middle !important;
  content: "team";
  position: absolute;
  transition: 0.4s all;
  top: 7px;
  right: 30px;
}
.toggle input:checked ~ .labels:after {
  color: black;
}
.toggle input:checked ~ .labels:before {
  color: white;
}
.toggle input:checked ~ .toggle_btn {
  left: 50%;
}
</style>
