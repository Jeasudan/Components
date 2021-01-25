<template>
  <!-- <div > -->
  <Layout class="wrap">
    <Header class="headerWrap">
      <MyHeader />
    </Header>
    <Layout class="contentWrap">
      <Sider hide-trigger class="sider">
        <ActiveMenu />
      </Sider>
      <Layout class="content">
        <!-- <div style="padding: 10px"> -->
        <Content style="background: #fff">
          <router-view></router-view>
        </Content>
        <!-- </div> -->
      </Layout>
    </Layout>
  </Layout>
  <!-- </div> -->
</template>

<script>
import MyHeader from "../common/Header.vue";
import ActiveMenu from "../common/Menu/Menu";

// import Home from "./Home/home.vue";

export default {
  name: "wrap",
  components: {
    MyHeader,
    ActiveMenu,
    // Home,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.wrap {
  background: #f5f7f9;
  overflow: hidden;
  .headerWrap {
    height: 60px;
  }
  .contentWrap {
    height: calc(100vh - 60px);
    overflow: hidden;
    .sider {
      background: #515a6e;
      overflow-y: auto;
    }
    .sider::-webkit-scrollbar {
      display: none;
    }
    .content {
      padding: 5px;
    }
  }
}
</style>

