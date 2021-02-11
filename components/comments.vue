<template>
  <div>
    <div class="container">
      <h3>Comments (3)</h3>
      <div class="posts_container">
        <div class="post" v-for="post in 3" :key="post">
          <div class="row">
            <div class="userName_logo">Y</div>
            <p class="userName">
              UserName · 1h · <span class="gold">Autor</span>
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="input_container">
      <b-form-textarea
        id="textarea"
        placeholder="Type message"
        rows="1"
        max-rows="1"
      ></b-form-textarea>
      <button @click.prevent="send()">
        <img src="@/assets/common/send.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    send() {
      alert(123);
    }
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
}
.post {
  margin-bottom: 20px;
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
