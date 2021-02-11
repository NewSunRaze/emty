<template>
  <div class="container">
    <div class="navigation">
      <div>
        <span
          @click="status = 'active'"
          v-bind:class="status == 'active' ? 'active' : ''"
          >Active</span
        >
        <span
          @click="status = 'archive'"
          v-bind:class="status == 'archive' ? 'active' : ''"
          >Archive</span
        >
        <span
          @click="status = 'comments'"
          v-bind:class="status == 'comments' ? 'active' : ''"
          >Comments</span
        >
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div class="active_content" v-if="status == 'active'" key="active">
        <h1>Active</h1>
      </div>
      <div
        class="archive_content"
        v-else-if="status == 'archive'"
        key="archive"
      >
        <h1>Archive</h1>
      </div>
      <div class="comments_content" v-else key="comments">
        <h1>Comments</h1>
      </div>
    </transition>
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
  }
};
</script>

<style scoped>
.active_content,
.archive_content,
.comments_content {
  margin-top: 30px;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
}
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
  padding: 5px;
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
  bottom: 1px;
  width: 150%;
  height: 2px;
  z-index: 2;
  background: black;
}
h1 {
  text-align: center;
}
</style>
