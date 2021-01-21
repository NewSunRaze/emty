<template>
  <div class="container col-12 row">
    <div class="test col-8">
      <span>Region: <span class="bold">Russia</span></span>
      <span>Industry: <span class="bold">IT</span></span>
    </div>
    <div class="center inline col-4 offset-lg-1 col-lg-2">
      <b-button variant="dark">Subscribe</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid #eed3e3;
  border-bottom: 1px solid #eed3e3;
}
.bold {
  font-weight: bold;
}
.inline {
  display: inline-block;
}
</style>
