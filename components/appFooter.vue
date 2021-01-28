<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="copyright">
          <p>© int.2020</p>
        </div>
        <div class="pay_system">
          <img src="@/assets/footer/payPal.jpg" alt="" />
          <img src="@/assets/footer/masCard.jpg" alt="" />
          <img src="@/assets/footer/visa.jpg" alt="" />
          <img src="@/assets/footer/bitCoin.jpg" alt="" />
        </div>
        <div class="admin_mail">
          <img src="@/assets/common/send_black.svg" alt="" />
          <span>admin@int.consulting</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 770px) {
  .copyright,
  .pay_system {
    margin-bottom: 15px;
  }
  .row {
    flex-direction: column;
  }
}
.container {
  align-items: center;
}
.container-fluid {
  position: absolute;
  bottom: 0;
  padding: 15px 0;
  background: white;
  border-top: 1px solid #eed3e3;
}
p {
  font-size: 18px;
}
.row {
  align-items: center;
  justify-content: space-between;
}
.admin_mail {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.admin_mail img {
  padding-right: 5px;
}
.copyright p {
  padding: 0;
  margin: 0;
}
</style>
