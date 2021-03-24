<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <span class="my_btn">Region: <span class="bold">Russia</span></span>
        <span class="my_btn">Industry: <span class="bold">IT</span></span>
        <div class="btn_cont">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 480px) {
  .my_btn {
    padding-right: 10px !important;
  }
  .container-fluid {
    margin-top: 20px;
    border-top: none !important;
  }
}
.container-fluid {
  font-size: 14px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
.row {
  padding: 5px 0px;
}
.my_btn {
  cursor: pointer;
  padding-right: 100px;
}
.btn_cont {
  display: inline;
}
button {
  background: black;
  color: white;
  outline: none;
  padding: 1px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  border: 1px solid black;
}
.bold {
  font-weight: bold;
}
</style>
