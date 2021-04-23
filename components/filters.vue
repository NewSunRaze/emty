<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container test">
        <span @click="getOptionsModal('region')" class="my_btn"
          >Region: <span class="bold">Russia</span></span
        >
        <span @click="getOptionsModal('industry')" class="my_btn"
          >Industry: <span class="bold">IT</span></span
        >
        <div class="btn_cont">
          <b-button @click="toast" class="mb-2">Subscribe</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toast() {
      this.$bvToast.toast(`Log in to subscribe`, {
        title: `Warn!`,
        toaster: "b-toaster-top-right",
        variant: "danger",
        appendToast: false
      });
    },
    getOptionsModal(type) {
      if (type == "region") {
        this.$store.dispatch("modalsStore/callChengeOnRegions");
      } else {
        this.$store.dispatch("modalsStore/callChengeOnIndustry");
      }
      this.$store.dispatch("modalsStore/callChangeOptionsModalToggle");
    }
  }
};
</script>
<style scoped>
@media only screen and (max-width: 480px) {
  .my_btn {
    padding-right: 0px !important;
  }
  .container-fluid {
    margin-top: 20px;
    border-top: none !important;
  }
  .container {
    display: flex;
    justify-content: space-around !important;
  }
}
.container-fluid {
  font-size: 14px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
.row {
  padding: 5px 0px;
}
.my_btn {
  cursor: pointer;
  padding-right: 100px;
}
.btn_cont {
  display: inline;
}
.container{
  display: flex;
  align-items: center;
}
button,
.btn,
.btn-secondary {
  background: black;
  color: white;
  outline: none;
  padding: 1px;
  border-radius: 5px;
  font-size: 14px;
  outline: none !important;
  border: 1px solid black;
  margin: 0 !important;
}
.bold {
  font-weight: bold;
}
</style>
