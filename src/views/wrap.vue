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
        <div style="height:36px;background:lightblue;margin-bottom:5px;"></div>
        <Content style="background: #fff;overflow:hidden;">
          <router-view></router-view>
        </Content>
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
      background-color: #fff;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

