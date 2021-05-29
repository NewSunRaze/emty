<template>
<div>
  <!-- <vue-dadata token="ece8872aafc165a2116709ee9bb1d5c292d83dad"></vue-dadata> -->
</div>
  <!-- <div
    id="modal-1"
    class="container-fluid"
    v-show="optionsModalToggle"
    @click.self="changeOptionsModalShowing"
  >
    <transition name="slide-fade" mode="out-in">
      <div class="main_cont" v-show="optionsModalToggle">
        <div class="clouser_wrapper" @click.prevent="changeOptionsModalShowing">
          <img src="@/assets/common/chevron.svg" alt="" />
        </div>
        <div class="input_wrapper" v-show="regions">
          <input type="text" placeholder="Region" />
          <div>
            <img src="@/assets/common/navigation.svg" />
          </div>
        </div>
        <div class="result" v-show="regions">
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
          <p>Saint-Petersburg, Russia</p>
        </div>
        <div v-show="regions" class="popular_cont">
          <h4>Popular</h4>
          <div>
            <span>Saint-Petersburg</span>
            <span>Paris</span>
            <span>Amsterdam</span>
            <span>New-York</span>
            <span>Industry</span>
          </div>
        </div>
        <div v-show="!regions" class="popular_cont">
          <div>
            <span v-for="service in services" :key="service" @click="setCurrentService(service)">{{service}}</span>
          </div>
        </div>
      </div>
    </transition>
  </div> -->
</template>

<script>
import VueDadata from 'vue-dadata'
export default {
  components: {
    'vue-dadata': VueDadata
  },
  async fetch(){
  },
  data() {
    return {
      services:['IT','HoReCa','Services','Government','Energetics','Development','Med','Media', 'Other']
    };
  },
  methods: {
    setCurrentService(service){
      this.$store.dispatch("modalsStore/callChangeCurrentService", service);
      this.$store.dispatch("modalsStore/callChangeOptionsModalToggle");
    },
    changeOptionsModalShowing() {
      this.$store.dispatch("modalsStore/callChangeOptionsModalToggle");
    }
  },
  computed: {
    optionsModalToggle() {
      return this.$store.getters["modalsStore/optionsModalToggle"];
    },
    regions() {
      return this.$store.getters["modalsStore/isRegion"];
    }
  },
  watch: {}
};
</script>

<style scoped>
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
  max-width: 350px;
}

.popular_cont div span:nth-child(1) {
  grid-area: 1;
}
.popular_cont div span:nth-child(2) {
  grid-area: 2 / 1;
}
.popular_cont div span:nth-child(3) {
  grid-area: 1 / 1 / span 2 / span 2;
}
.popular_cont div span:nth-child(4) {
  grid-area: 1 / 1 / span 2 / span 2;
}
.popular_cont div span:nth-child(5) {
  grid-area: 1 / 1 / span 2 / span 2;
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

.popular_cont span {
  display: inline-block;
  background: black;
  color: white;
  outline: none;
  padding: 7px 20px;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  outline: none;
  text-align: center;
  border: 1px solid black;
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
</style>
