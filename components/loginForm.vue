<template>
  <div class="container">
    <b-form flex class="">
      <label class="sr-only mb-5" for="inline-form-input-usermail"
        >Usermail</label
      >
      <b-input-group prepend="username" class="mr-sm-2 mb-sm-0">
        <b-form-input
          variant="dark"
          id="inline-form-input-usermail"
          placeholder="example@ex.com"
        ></b-form-input>
      </b-input-group>

      <label class="sr-only mb-5" for="inline-form-input-name">Name</label>
      <b-input-group prepend="pasword" class="mt-2 mr-sm-2 mb-sm-0">
        <b-form-input
          variant="dark"
          id="inline-form-input-name"
          placeholder="Jane Doe"
        ></b-form-input>
      </b-input-group>

      <b-form-checkbox variant="dark" class="mt-2 mb-2 mr-sm-2 mb-sm-0"
        >Remember me</b-form-checkbox
      >

      <nuxtLink to="/">
        <b-button variant="dark" class="mt-2 mr-2 ">Log in</b-button>
      </nuxtLink>
      <nuxtLink to="signup">
        <b-button variant="dark" class="mt-2 ">Sign Up</b-button>
      </nuxtLink>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
