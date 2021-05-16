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

<!-- active -->

      <div v-if="status == 'active'" key="active">
        <div class="postWrapper" v-for="post in myPosts" :key="post.id">
          <div class="before_content col-6 col-md-2">
            <h3>{{ Date()  | moment("from", post.created_at) }}</h3>
            <img src="@/assets/common/swap.svg" alt="" />
          </div>
          <div class="post_container col-12 col-md-8" @click="goToPost(post)">
            <div class="row_block">
              <div>
                <h3 class="ta-left">{{post.label}}</h3>
                <p class="ta-left">
                  <span> <img src="@/assets/lists/map-pin.svg" alt="" /> </span
                  >Saint-Petersburg
                </p>
              </div>
              <h3 class="cost">{{post.money_amount}}$</h3>
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
                {{post.visitors}}<span><img src="@/assets/lists/eye.svg" alt=""/></span>
              </p>
            </div>
            <div class="description">
              <p>{{post.description}}</p>
            </div>
          </div>
          <div class="after_content col-6 col-md-1">
            <img src="@/assets/common/trash.svg" alt="" />
          </div>
        </div>
      </div>


<!-- archive -->


      <div
        v-else-if="status == 'archive'"
        key="archive"
      >
        <div class="postWrapper">

          <div class="before_content  col-12 col-md-2">
            <h3>14 days</h3>
            <img src="@/assets/common/swap.svg" alt="" />
          </div>
          <div class="post_container col-12 col-md-10">
            <div class="row_block">
              <div>
                <h3 class="ta-left">label</h3>
                <p class="ta-left">
                  <span> <img src="@/assets/lists/map-pin.svg" alt="" /> </span
                  >Saint-Petersburg
                </p>
              </div>
              <h3 class="cost">1232$</h3>
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
              <p>description</p>
            </div>
          </div>
      </div>
      </div>

<!-- COMMENTS -->

      <div v-else key="comments">
        <div class="postWrapper" v-for="comment in myComments" :key="comment.id">
          <div class="post_container col-12">
            <div class="row_block">
              <div>
                <h3 class="ta-left">label</h3>
                <p class="ta-left">
                  <span> <img src="@/assets/lists/map-pin.svg" alt="" /> </span
                  >Saint-Petersburg
                </p>
              </div>
              <h3 class="cost">1232$</h3>
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
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  layout: "profile",
  middleware: "auth",
  async fetch(){
    this.myComments = await this.$axios.$get('/user/comments')
    this.myPosts = await this.$axios.$get('/projects/current')
  },
  data() {
    return {
      myPosts: [],
      status: "active"
    };
  },
  methods:{
    goToPost(currentPost){
        this.$router.push(`/posts/${currentPost.id}`);
    },
    async test(){
      // console.log(this.$moment.locale())
      // var date = new Date
      // console.log('date: ', date.parse('2021-05-27T15:31:52.960+00:00'))
      // console.log(Date.now())
      // console.log(Date.parse('2021-05-27T15:31:52.960+00:00'))
      // var timeDiff = Math.abs(Date.parse('2021-05-27T15:31:52.960+00:00') - Date.now());
      // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      // console.log(diffDays)
      console.log(this.$moment.subtract(1, 'days'))
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .after_content {
    order: 3;
    margin: 0 !important;
    justify-content: flex-end;
  }
  .before_content {
    order: 2;
    margin: 0 !important;
  }
  .post_container {
    order: 1;
  }
  .archive_content {
    justify-content: flex-start !important;
  }
  .post_container {
    max-width: 95% !important;
  }
  .postWrapper,
  .archive_content,
  .comments_content {
    justify-content: center !important;
  }
}

.after_content {
  display: flex;
  cursor: pointer;
}
.before_content {
  cursor: pointer;
  display: flex;
}
.postWrapper,
.archive_content,
.comments_content {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
}

.comments_content {
  justify-content: center;
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
  min-width: 70%;
  padding: 20px 20px;
}
.post_container:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}

.ta-left {
  text-align: left;
}
.component_container {
  flex-direction: column;
  margin-top: 50px;
}
.post_container h3 {
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
.description p {
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.views_and_icons .row_block img {
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
.before_content h3 {
  margin-bottom: 0;
  padding-right: 5px;
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
