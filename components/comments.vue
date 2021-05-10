<template>
  <div>
    <div class="container">
      <h3>Comments ({{this.allComments.length}})</h3>
      <div class="posts_container">
        <div class="post" v-for="comment in allComments" :key="comment.id">
          <div class="row">
            <div class="userName_logo">Y</div>
            <p class="userName">
              {{comment.author.login}} · {{comment.created_at}} · <span class="gold">{{ (comment.author.id === currentPost.user.id) ? 'author' : '' }}</span>
            </p>
          </div>
          <div>
            <p>
              {{comment.text}}
            </p>
          </div>
          <div class="btn_container">
            <button @click="reply(comment.id)">123</button></div>
        </div>
      </div>
    </div>
    <div class="input_container">
      <b-form-textarea
        id="textarea"
        placeholder="Type message"
        rows="1"
        max-rows="1"
        v-model="commentText"
      ></b-form-textarea>
      <button @click.prevent="send()">
        <img src="@/assets/common/send.svg" alt="" />
      </button>
      <button @click.prevent="test()">123
        <img src="@/assets/common/send.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  async fetch(){
    this.currentPost = this.$store.getters["firstPage/firstPageStore/getCurrentPost"]
    this.allComments = await this.$axios.$get(`/projects/${this.currentPost.id}/comments`)
  },
  data() {
    return {
      currentPost: "",
      allComments: "",
      commentText: ""
    };
  },
  methods: {
    async send() {
      try{
        const rezult = await this.$axios.$post(`/projects/${this.currentPost.id}/comments`,{
          "parent_comment_id": "string",
          "text": this.commentText
        })
      }
      catch(e){
        console.log(e)
      }
    },
    async test() {
      console.log(this.allComments)
    },
  }
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .userName {
    display: block;
  }
}
.input_container {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  background: black;
  border-radius: 5px;
  overflow: hidden;
}
.btn_container{
  display: none;
  justify-content: flex-end;
}
#textarea {
  position: relative;
  width: 80%;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  resize: none;
  overflow: auto;
}
.input_container button {
  position: relative;
  width: 20%;
  padding: 5px;
  color: white;
  background: black;
  border: 1px solid black;
}
.input_container button img {
  height: 20px;
}
.posts_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s !important;
}
.post {
  margin-bottom: 20px;
  transition: all 1s !important;
}

.post:hover .btn_container{
  display: flex;
}
.post .row {
  align-items: top;
}
.post p {
  text-align: left;
}
.contaier {
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
}
.userName_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-align: center;
  padding: 3px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.userName {
  margin-top: 5px;
  color: #eed3e3;
}
.gold {
  color: #bb9532;
}
</style>
