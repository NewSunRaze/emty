<template>
  <div class="container">
    <div class="settings">
      <div class="settings_wrapper">
        <div class="input_container">
          <p>Subscribes</p>
          <input type="checkbox" />
        </div>
        <div class="input_container">
          <p>Subscribes</p>
          <input type="checkbox" />
        </div>
        <div class="input_container">
          <p>Subscribes</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
    <div class="subscribes">
      <div class="mt-2">
        <h4>Subscribes</h4>
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <span>Region: Russia</span>
            <span>Industru: IT</span>
          </div>
          <button>Subscribe</button>
        </div>
        <hr />
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <span>Region: Russia</span>
            <span>Industru: IT</span>
          </div>
          <button>Subscribe</button>
        </div>
        <hr />
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <span>Region: Russia</span>
            <span>Industru: IT</span>
          </div>
          <button>Unsubscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile"
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  button {
    margin-left: 30px !important;
  }
}
@media only screen and (max-width: 520px) {
  .subscribes,
  .settings {
    max-width: 100% !important;
  }
  button {
    margin-left: 5px !important;
  }
}
.row {
  align-items: center;
  justify-content: space-between;
}
button {
  margin-left: 100px;
  background: black;
  padding: 5px 30px;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
}
.subscribes {
  padding: 20px 10%;
}
.input_container p {
  margin-right: 40px;
  margin-bottom: 0;
}
.text_wraper span {
  display: block;
}
.text_wraper {
  text-align: left;
}
.input_container {
  padding: 20px 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settings_wrapper input {
  margin-left: 50px;
}
.settings_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

h4 {
  /* color: white;
  border-radius: 5px;
  background-color: black; */
  margin-bottom: 20px;
  font-weight: bold;
}
.settings,
.subscribes {
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  max-width: 70%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>
