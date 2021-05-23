<template>
  <div class="container">
    <div class="component_container center">
      <div class="post_container main_post">
        <div class="row_block">
          <div>
            <h3 class="ta-left">{{ post.label }}</h3>
            <p class="ta-left">
              <span> <img src="@/assets/lists/map-pin.svg" alt="" /> </span
              >Saint-Petersburg
            </p>
          </div>
        <img class="cost" :src="require('@/assets/common/non_paid_active.svg')" v-if="!post.money_amount"/>
        <h3 class="cost" v-else>{{ post.money_amount }} $</h3>
        </div>
        <div class="row_block views_and_icons">
          <p class="ta-left">
            <span>
              <img src="@/assets/lists/check-circle.svg" alt="" />
            </span>
            actual
          </p>
          <div class="row_block">
            <img src="~/assets/lists/pdf.svg" alt="" @click="getFile('PDF')"/>
            <img src="~/assets/lists/xlsx.svg" alt="" />
            <img src="~/assets/lists/com.svg" alt="" />
          </div>
          <p class="views">
            1234 <span><img src="@/assets/lists/eye.svg" alt=""/></span>
          </p>
        </div>
        <div class="description">
          <p>{{ post.description }}</p>
        </div>
        <hr />
        <div class="coments center">
          <comments />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, route }) {
    await store.dispatch(
      `firstPage/firstPageStore/fetchCurrentPost`,
      route.params.id
    );
  },
  middleware: "auth",
  data() {
    return {};
  },
  computed: {
    post() {
      return this.$store.getters["firstPage/firstPageStore/getCurrentPost"];
    }
  },
  methods:{
    async getFile(file_type){
      const rezult = await this.$axios.$get(`/projects/${this.post.id}/file/${file_type}`);
      console.log(rezult)
    }
  },
  mounted(){
    console.log(this.post)
  }
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .post_container {
    max-width: 95% !important;
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
  position: relative;
  max-width: 70%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
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
  cursor: pointer;
  margin-right: 10px;
}
.views_and_icons .row_block p {
  width: 100% !important;
}
.views_and_icons .row_block p span {
  width: 100% !important;
}
.views_and_icons .row_block p span image {
  width: 100% !important;
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
hr {
  border: none;
  height: 1px;
  background-image: linear-gradient(to right, #fff, #eed3e3, #fff);
}
</style>
