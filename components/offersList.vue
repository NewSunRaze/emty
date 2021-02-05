<template>
  <div class="component_container center">
    <div class="post_container add_post" @click="goAdd()">
      <h1>+ Add new offer</h1>
    </div>
    <div
      class="post_container main_post"
      @click="openpost()"
      v-for="post in team_posts"
      :key="post.label"
    >
      <div class="row_block">
        <div>
          <h3 class="ta-left">{{ post.label }}</h3>
          <p class="ta-left">
            <span> <img src="@/assets/lists/map-pin.svg" alt="" /> </span
            >Saint-Petersburg
          </p>
        </div>
        <h3 class="cost">{{ post.money_amount }}$</h3>
      </div>
      <div class="row_block views_and_icons">
        <p class="ta-left">
          <span>
            <img src="@/assets/lists/check-circle.svg" alt="" />
          </span>
          actual
        </p>
        <div class="row_block">
          <img src="~/assets/lists/pdf.svg" alt="" />
          <img src="~/assets/lists/xlsx.svg" alt="" />
          <img src="~/assets/lists/com.svg" alt="" />
        </div>
        <p class="views">
          1234 <span><img src="@/assets/lists/eye.svg" alt=""/></span>
        </p>
      </div>
      <div class="description">
        <p>
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    team_posts() {
      return this.$store.getters["firstPage/firstPageStore/getTeamPosts"];
    }
  },
  methods: {
    goAdd() {
      this.$router.push("/posts/create");
    },
    openpost() {
      this.$router.push("/posts/" + 1);
    }
  },
  async mounted() {}
};
</script>
<style scoped>
@media only screen and (max-width: 960px) {
  .post_container {
    max-width: 95% !important;
  }
  .add_post {
    width: 95% !important;
  }
}
@media only screen and (max-width: 540px) {
  .views_and_icons p {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
.ta-left {
  text-align: left;
}
.component_container {
  flex-direction: column;
  margin-top: 50px;
}
.post_container {
  cursor: pointer;
  position: relative;
  max-width: 70%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
}
.post_container:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}
.add_post {
  width: 70%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add_post h1 {
  font-size: 22px;
}
.main_post {
  min-width: 70%;
  padding: 20px 20px;
}
.main_post h3 {
  font-size: 18px;
}
.row_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
}
.row_block p img {
  padding-right: 3px;
}
.cost {
  padding-top: 30px;
}
.views_and_icons {
  align-items: flex-end;
  font-size: 12px;
}
.description {
  text-align: left;
}
.views_and_icons .row_block img {
  margin-right: 10px;
}
h3 {
  font-weight: 500;
}
span {
  width: 15px;
  padding: 0;
  margin: 0;
}
p {
  padding-left: 0;
}
</style>
