<template>
  <div class="container">
    <div class="settings">
      <div class="settings_wrapper">
        <div class="input_container">
          <p>Subscribes</p>
          <div class="slideThree first_input_cont">
            <input
              type="checkbox"
              value="None"
              id="first_input_cont"
              name="check"
              checked
            />
            <label for="first_input_cont"></label>
          </div>
        </div>
        <div class="input_container">
          <p>Comments</p>
          <div class="slideThree second_input_cont">
            <input
              type="checkbox"
              value="None"
              id="second_input_cont"
              name="check"
              checked
            />
            <label for="second_input_cont"></label>
          </div>
        </div>
        <div class="input_container third_input_cont">
          <p>Relevance of the topic</p>
          <div class="slideThree">
            <input
              type="checkbox"
              value="None"
              id="third_input_cont"
              name="check"
              checked
            />
            <label for="third_input_cont"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribes">
      <div class="mt-2">
        <h4>Subscribes</h4>
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <p>Region: <span>Russia</span></p>
            <p>Industru: <span>IT</span></p>
          </div>
          <button>Subscribe</button>
        </div>
        <hr />
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <p>Region: <span>Russia</span></p>
            <p>Industru: <span>IT</span></p>
          </div>
          <button>Subscribe</button>
        </div>
        <hr />
        <div class="row">
          <div class="text_wraper">
            <h5>Invest</h5>
            <p>Region: <span>Russia</span></p>
            <p>Industru: <span>IT</span></p>
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
@media only screen and (max-width: 1200px) {
  .subscribes,
  .settings {
    width: 75% !important;
  }
}
@media only screen and (max-width: 960px) {
  .settings_wrapper {
    padding: 10px 40px !important;
  }
  .subscribes,
  .settings {
    width: 95% !important;
  }
  button {
    margin-left: 30px !important;
  }
}
@media only screen and (max-width: 520px) {
  .input_container,
  .settings_wrapper {
    padding: 10px 15px !important;
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
  margin-bottom: 0;
}
.text_wraper span {
  font-weight: bold;
}
.text_wraper h5 {
  font-weight: bold;
}
.text_wraper p {
  margin: 0;
}
.text_wraper {
  text-align: left;
}
.input_container {
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings_wrapper input {
  margin-left: 90px;
}
.settings_wrapper {
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

h4 {
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
  width: 50%;
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

.slideThree {
  position: relative;
  font-size: 12px;
  width: 60px;
  height: 26px;
  background: #333;
  position: relative;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  overflow: hidden;
}
.slideThree:after {
  content: "OFF";
  color: #000;
  position: absolute;
  right: 6px;
  top: 4px;
  z-index: 0;
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
}
.slideThree:before {
  content: "ON";
  color: white;
  position: absolute;
  left: 8px;
  top: 4px;
  z-index: 0;
  font-weight: bold;
}
.slideThree label {
  display: block;
  width: 27px;
  height: 20px;
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: 1;
  background: white;
  border-radius: 50px;
  transition: all 0.4s ease;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
}
.slideThree input[type="checkbox"] {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}
.first_input_cont input[type="checkbox"]:checked + label {
  left: 30px;
}
.second_input_cont input[type="checkbox"]:checked + label {
  left: 30px;
}
.third_input_cont input[type="checkbox"]:checked + label {
  left: 30px;
}
</style>
