<template>
  <div class="container">
    <div class="toggle">
      <input @click="changeMode()" v-model="mode" type="checkbox" />
      <span class="btn"></span>
      <span class="labels"></span>
      <span class="bg"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    changeMode() {
      this.$store.dispatch('firstPage/firstPageStore/callChangeToggleMode')
      this.$router.push('/')
    }
  },
  computed:{
    mode(){
      return this.$store.getters[
        "firstPage/firstPageStore/changeToggleMode"
      ];
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.toggle {
  position: relative;
  width: 200px;
  height: 40px;
  background: #000;
  border-radius: 5px;
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
.toggle .btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #eed3e3;
  border-radius: 5px;
  transition: 0.4s all;
  border: 3px solid black;
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
.toggle input:checked ~ .btn {
  left: 50%;
}
</style>
