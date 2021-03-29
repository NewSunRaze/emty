<template>
  <div
    class="container-fluid"
    v-show="modalParams.show"
    @click.self="callChangeInformModal"
  >
    <transition name="slide-fade" mode="out-in">
      <div class="main_cont" v-show="modalParams.show">
        <div class="clouser_wrapper" @click.prevent="callChangeInformModal">
          <img src="@/assets/common/chevron.svg" alt="" />
        </div>
        <h3>{{ modalParams.params.decription }}</h3>
        <div class="row">
          <span v-show="modalParams.params.firstBtn">6,99$</span>
          <button class="but" @click="next()">
            {{ modalParams.params.secondBtn }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    callChangeInformModal() {
      var informModal = {
        show: false,
        params: {}
      };
      this.$store.dispatch("modalsStore/callChangeInformModal", informModal);
    },
    next() {
      if (this.modalParams.params.firstBtn) {
        document.location.href = "https://google.com";
      } else {
        var informModal = {
          show: true,
          params: {
            decription: "Ads in this category are paid",
            firstBtn: true,
            secondBtn: `Pay now`
          }
        };
        this.$store.dispatch("modalsStore/callChangeInformModal", informModal);
      }
    }
  },
  computed: {
    modalParams() {
      return this.$store.getters["modalsStore/getInformModal"];
    }
  },
  watch: {}
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .row {
    flex-direction: column !important;
  }
  .but {
    margin-top: 10px;
  }
  h3 {
    padding-bottom: 30px !important;
  }
}
h3 {
  font-size: 16px;
  max-width: 350px;
  padding-bottom: 40px;
  text-align: center;
}
.row {
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.container-fluid {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(1, 1, 1, 0.6);
}
.main_cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 15px;
  background: white;
}
.clouser_wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 5px;
}
.result {
  padding-left: 15px;
  width: 100%;
  max-height: 140px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.popular_cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.popular_cont h4 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.popular_cont div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input_wrapper input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #eed3e3;
  border-radius: 5px;
}
.input_wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
}
.input_wrapper div {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 100%;
}
.main_cont {
  max-width: 350px;
}
.main_cont span {
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.but {
  background: black;
  padding: 5px 45px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
