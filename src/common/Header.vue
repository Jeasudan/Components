<template>
  <div class="header">
    <div class="headLeft">
      <div class="logo"><img src="../assets/logo.png" alt="" /></div>
      <div class="name">wodemingzi</div>
    </div>
    <div class="headRight">
      <ul style="color: #fff; display: flex">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>   

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  .headLeft {
    display: flex;
    width: 300px;
    .logo {
      img {
        height: 34px;
        margin-top: 15px;
      }
    }
    .name {
      padding-left: 5px;
      font-size: 22px;
      color: #fff;
      line-height: 64px;
    }
  }
  .headRight {
    width: 200px;
    display: flex;
  }
}
</style>