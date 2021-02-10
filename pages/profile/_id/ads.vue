<template>
  <div class="container">
    <div class="navigation">
      <div>
        <span class="active" @click="this.status = 'active'">Active</span>
        <span @click="this.status = 'archive'">Archive</span>
        <span>Comments</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile",
  middleware: "auth",
  data() {
    return {
      status: "active"
    };
  },
  methods: {},
  watch: {}
};
</script>

<style scoped>
.navigation {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation div {
  position: relative;
}
.navigation div::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: -5%;
  bottom: -2px;
  width: 110%;
  height: 2px;
  background: #eed3e3;
}
.navigation span {
  position: relative;
  color: #eed3e3;
  cursor: pointer;
}
.navigation span:nth-child(2) {
  margin-left: 25px;
  margin-right: 25px;
}
.active {
  color: black !important;
}
.active::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: -25%;
  bottom: -4px;
  width: 150%;
  height: 2px;
  z-index: 2;
  background: black;
}
</style>
