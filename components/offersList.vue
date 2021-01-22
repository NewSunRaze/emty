<template>
  <div class="component_container center">
    <div class="post_container add_post">
      <h1>+ Add new offer</h1>
    </div>
    <div class="post_container main_post">
      <div class="row_block">
        <div>
          <h3 class="ta-left">FullStack developer</h3>
          <p class="ta-left"><span>$</span>Saint-Petersburg</p>
        </div>
        <h3 class="cost">1.000$</h3>
      </div>
      <div class="row_block views_and_icons">
        <p class="ta-left">!actual</p>
        <div class="row_block">
          <img src="~/assets/pdf.svg" alt="" />
          <img src="~/assets/xlsx.svg" alt="" />
          <img src="~/assets/com.svg" alt="" />
        </div>
        <h3 class="views">1234 {}</h3>
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam neque
          illo amet expedita possimus tempora, alias aliquid! Deserunt vero
          doloremque ea sequi reiciendis itaque magni dolore soluta. Facilis
          aperiam laboriosam provident error, a ullam accusantium obcaecati
          numquam beatae eos est iste, dolorum eaque nam consequatur magnam
          molestias adipisci. Voluptates, ab doloribus! Fugit harum provident
          porro, quis unde repudiandae magnam!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ta-left {
  text-align: left;
}
.component_container {
  flex-direction: column;
  margin-top: 50px;
}
.post_container {
  cursor: pointer;
  position: relative;
  width: 70%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
}
.add_post {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_post {
  padding: 20px 15px;
}
.row_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
}
.cost {
  padding-top: 30px;
}
.views_and_icons {
  align-items: flex-end;
}
.description {
  text-align: left;
}
.views_and_icons img {
  margin-right: 10px;
}
h3 {
  font-weight: 500;
}
</style>
