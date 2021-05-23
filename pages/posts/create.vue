<template>
  <div class="container center">
    <b-form @submit.stop.prevent="createPost" class="create_post_container">
      <div class="container">
        <div class="toggle">
          <input type="checkbox" v-model="form.project_type" />
          <span class="toggle_btn"></span>
          <span class="labels"></span>
          <span class="bg"></span>
        </div>
      </div>

      <div class="inputs_container">

        <b-form-group id="input-group-10">
          <div class="input_wrapper">
            <b-form-input type="text"
              id="input-10"
              placeholder="Title"
              v-model.trim="$v.form.label.$model"
              aria-describedby="input-10-live-feedback"
              :state="validateState('label')"
            ></b-form-input>
            <b-form-invalid-feedback id="input-10-live-feedback">This is a required field.</b-form-invalid-feedback>
          </div>
        </b-form-group>

        <b-form-group id="input-group-11">
          <div class="input_wrapper">
            <b-form-input
              v-numericOnly
              id="input-11"
              placeholder="Amount in dollars"
              :disabled="form.non_paid"
              v-model="form.money_amount"
              aria-describedby="input-11-live-feedback"
            ></b-form-input>
            <div class="icon">
              <img
                :src="
                  this.form.non_paid
                    ? require('@/assets/common/non_paid_active.svg')
                    : require('@/assets/common/non_paid.svg')
                "
                @click="change_non_paid()"
              />
            </div>
            <b-form-invalid-feedback id="input-11-live-feedback"></b-form-invalid-feedback>
          </div>
        </b-form-group>

        <b-form-group id="input-group-12">
          <div class="input_wrapper">
            <b-form-input
              id="input-12"
              placeholder="Region"
              @click="getOptionsModal('region')"
              readonly
            ></b-form-input>
            <div class="icon">
              <img
                src="@/assets/common/navigation.svg"
                alt=""
              />
            </div>
            <b-form-invalid-feedback id="input-12-live-feedback"></b-form-invalid-feedback>
          </div>
        </b-form-group>

        <b-form-group id="input-group-13">
          <div class="input_wrapper">
            <b-form-input
              id="input-13"
              :value="computed_industry"
              placeholder="Industry"
              @click="getOptionsModal('industry')"
              readonly
            ></b-form-input>
            <div class="icon">
              <img src="@/assets/common/industry.svg"/>
            </div>
            <b-form-invalid-feedback id="input-13-live-feedback"></b-form-invalid-feedback>
          </div>
        </b-form-group>
        <div class="add_files">
          <div
            class="file-upload"
            @click="upload('pdf')"
            :class="form.pdf ? 'uploaded' : ''"
          >
            <input type="file" ref="pdf" @change="changeHandler('pdf')" />
            <div>pdf</div>
          </div>
          <div
            class="file-upload"
            @click="upload('xlsx')"
            :class="form.xlsx ? 'uploaded' : ''"
          >
            <input type="file" ref="xlsx" @change="changeHandler('xlsx')" />
            <div>xlsx</div>
          </div>
        </div>
        <b-form-textarea
          id="textarea"
          v-model="$v.form.description.$model"
          placeholder="Type description"
          rows="3"
          max-rows="6"
          :state="validateState('description')"
          aria-describedby="textarea-live-feedback"
        ></b-form-textarea>
        <b-form-invalid-feedback id="textarea-live-feedback">This is a required field and its length cannot be more than 5000 characters.</b-form-invalid-feedback>


        <b-button class="button" type="submit">+ Add new project</b-button>
        <b-button class="button" @click="test()">test</b-button>

      </div>
    </b-form>
  </div>
</template>

<script>
import optionsModal from "@/components/optionsModal.vue";
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  middleware: "auth",
  components:{
    optionsModal
  },
  data() {
    return {
      form:{
        description: "",
        project_type: false,
        label:"",
        money_amount:"",
        pdf: "",
        xlsx: "",
        industry: '',
        non_paid: false,
        showAgain: true
      }
    };
  },
  validations:{
    form:{
      label:{
        required
      },
      description:{
        required,
        maxLength: maxLength(5000)
      }
    }

  },
  methods: {
    test(){
        const project = JSON.stringify({
          "description": this.form.description,
          "industry": this.computed_industry,
          "label": this.form.label,
          "money_amount": this.form.money_amount,
          "project_type": (this.form.project_type ? 'TEAM' : 'INVEST'),
          "region": "test"
        });
      console.log(project)
    },
    validateState(params) {
      const { $dirty, $error } = this.$v.form[params];
      return $dirty ? !$error : null;
    },
    upload(type) {
      if (type == "pdf") {
        this.form.pdf == "" ? this.$refs.pdf.click() : (this.form.pdf = "");
      }
      if (type == "xlsx") {
        this.form.xlsx ? (this.form.xlsx = "") : this.$refs.xlsx.click();
      }
    },
    changeHandler(type) {
      type == "pdf"
        ? (this.form.pdf = this.$refs.pdf.files[0])
        : (this.form.xlsx = this.$refs.xlsx.files[0]);
    },
    change_non_paid() {
      this.form.non_paid = !this.form.non_paid
      this.form.money_amount = "";
    },
    getOptionsModal(type) {
      if (type == "region") {
        this.$store.dispatch("modalsStore/callChengeOnRegions");
      } else {
        this.$store.dispatch("modalsStore/callChengeOnIndustry");
      }
      this.$store.dispatch("modalsStore/callChangeOptionsModalToggle");
    },
    async createPost(){

      this.$v.form.$touch()
      console.log(this.form)
      if(!this.$v.form.$error){
        const formData = new FormData();
        const project = JSON.stringify({
          "description": this.form.description,
          "industry": this.computed_industry,
          "label": this.form.label,
          "money_amount": this.form.money_amount,
          "project_type": (this.form.project_type ? 'TEAM' : 'INVEST'),
          "region": "test"
        });
        formData.append('pdf_file', this.form.pdf);
        formData.append('project ', project);
        formData.append('xlsx_file', this.form.xlsx);

        console.log(formData)
        try{
          const rezult = await this.$axios.$post("projects", formData);
          this.$router.push(`/posts/${rezult.id}`);
        }
        catch(e){
          console.log(e)
        }
      }
    }
  },
  computed:{
    computed_industry(){
      return this.$store.getters["modalsStore/getCurrentService"];
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
.form-control[readonly]{
  background-color: white !important;
}
.form-control {
  height: auto !important;
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
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}
.input_wrapper .icon {
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
  outline: none !important;
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
