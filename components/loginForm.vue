<template>
  <div class="container">
    <b-form flex class="">
      <label class="sr-only mb-5" for="inline-form-input-name">Name</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Jane Doe"
      ></b-form-input>

      <label class="sr-only mb-5" for="inline-form-input-username"
        >Username</label
      >
      <b-input-group append="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          id="inline-form-input-username"
          placeholder="Username"
        ></b-form-input>
      </b-input-group>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
        >Remember me</b-form-checkbox
      >

      <nuxtLink to="/">
        <b-button variant="primary">Save</b-button>
      </nuxtLink>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
