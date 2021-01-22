<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-sm-6 col-8 my-m-auto">
          <div class="box">
            <div class="col-lg-6 offset-lg-0">
              <span class="my_btn"
                >Region: <span class="bold">Russia</span></span
              >
            </div>
            <div class="col-lg-6 offset-lg-0">
              <span class="my_btn">Industry: <span class="bold">IT</span></span>
            </div>
          </div>
        </div>
        <div class="center col-lg-1 col-md-4 col-sm-1 col-4">
          <b-button variant="dark">Subscribe</b-button>
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
  .box {
    flex-direction: column !important;
  }
}
.container-fluid {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
.centered {
  align-items: center;
}
.my-m-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.box {
  display: flex;
  flex-direction: row;
}
.bold {
  font-weight: bold;
}
.inline {
  display: inline-block;
}
.my_btn {
  cursor: pointer;
}
</style>
