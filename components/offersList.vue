<template>
  <div class="component_container center">
    <div class="post_container add_post">
      <h1>+ Add new offer</h1>
    </div>
    <div class="post_container main_post">
      <div class="row_block">
        <div>
          <h3 class="ta-left">FullStack developer</h3>
          <p class="ta-left">
            <span>
              <img src="@/assets/lists/map-pin.svg" alt="">
            </span>Saint-Petersburg</p>
        </div>
        <h3 class="cost">1.000 $</h3>
      </div>
      <div class="row_block views_and_icons">
        <p class="ta-left">
          <span>
            <img src="@/assets/lists/check-circle.svg" alt="">
          </span> actual</p>
        <div class="row_block">
          <img src="~/assets/lists/pdf.svg" alt="" />
          <img src="~/assets/lists/xlsx.svg" alt="" />
          <img src="~/assets/lists/com.svg" alt="" />
        </div>
        <p class="views">1234 <span><img src="@/assets/lists/eye.svg" alt=""></span></p>
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
@media only screen and (max-width: 960px) {
.post_container{
  max-width: 100% !important;
  }
.add_post{
  width: 100% !important;
  }
}
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
  max-width: 70%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
}
.post_container:hover{
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .5);
}
.add_post {
  width: 70%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add_post h1 {
  font-size: 22px;
}
.main_post {
  padding: 20px 20px;
}
.main_post h3 {
  font-size: 18px;
}
.row_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
}
.row_block p img{
  padding-right: 3px;
}
.cost {
  padding-top: 30px;
}
.views_and_icons {
  align-items: flex-end;
  font-size: 12px;
}
.description {
  text-align: left;
}
.views_and_icons .row_block img {
  margin-right: 10px;
}
h3 {
  font-weight: 500;
}
span{
  width: 15px;
  padding: 0;
  margin: 0;
}
p{
  padding-left: 0;
}
</style>
