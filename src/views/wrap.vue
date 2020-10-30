<template>
  <div class="wrap">
    <Layout>
      <Header class="headerWrap">
        <MyHeader />
      </Header>
      <Layout>
        <Sider :style="{ background: '#5b6270' }"> 菜单 </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }"> mgv , </Breadcrumb>
          <Content
            :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
          >
            <!-- Content -->
            <FirstLook  />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import MyHeader from "../common/Header.vue";
import FirstLook from "./Home/firstLook.vue";

export default {
  name: "wrap",
  components: {
    MyHeader,
    FirstLook
  },
};
</script>

<style scoped lang="less">
.wrap {
  background: #f5f7f9;
}
</style>

