<template>
  <div class="wrap">
    <Layout>
      <Header class="headerWrap">
        <MyHeader />
      </Header>
      <Layout>
        <Sider hide-trigger style="background: #5b6270; height: 800px">
          <ActiveMenu />
        </Sider>
        <Layout :style="{ padding: '15px' }">
          <!-- <Breadcrumb :style="{ margin: '24px 0' }"> mgv , </Breadcrumb> -->
          <Content style="background: #fff">
            <!-- <Home /> -->
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
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
}
</style>

