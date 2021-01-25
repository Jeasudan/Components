<template>
  <div class="header">
    <div class="headLeft">
      <div class="logo"><img src="../assets/logo.png" alt="" /></div>
      <div class="name">wodemingzi</div>
    </div>
    <div class="headRight">
      <ul>
        <li class="notice">
          <Badge dot>
            <Icon type="ios-notifications-outline" size="26"></Icon>
          </Badge>
        </li>
        <li>
          <Dropdown style="margin-left: 20px">
            <div style="display: flex;cursor;cursor:pointer;">
              <Avatar style="background-color: #87d068; margin-right: 5px" icon="ios-person" />
              <Icon style="margin-top: 10px; font-size: 16px" type="ios-arrow-down"></Icon>
            </div>
            <DropdownMenu slot="list" style="">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>修改密码</DropdownItem>
              <DropdownItem divided>退出登录</DropdownItem>
              <!-- <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem> -->
            </DropdownMenu>
          </Dropdown>
        </li>
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
    width: 100px;
    // background-color: #000;
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
    background-color: #fff;
    // display: flex;
    ul {
      height: 60px;
      line-height: 60px;
      display: flex;
      // justify-content: space-between;
      & > li {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        // justify-content: flex-end;
        /deep/.ivu-badge-dot {
          top: 10px;
        }
      }
      .notice {
        .ivu-icon {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>