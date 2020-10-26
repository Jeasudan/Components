<template>
  <div class="wrap">
    <Layout>
        <Header class="headerWrap">
          <MyHeader />
        </Header>
        <Layout>
            <Sider :style="{background: '#5b6270'}">
                菜单
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                mgv ,
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
</div>
</template>

<script>
  import MyHeader from '../common/Header.vue'
export default {
  name: "wrap",
  components:{
    MyHeader
  }
};
</script>

<style scoped lang="less">
  .wrap{
    background: #f5f7f9;
    /* position:relative; */
    /* overflow:hidden; */
    /* .headerWrap{
      height:45px;
      background:rgb(50,53,59);
    } */
  }
  /* .layout-logo{
    width: 100px;
    height: 30px;
    background: rgb(50, 53, 59);
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  } */
</style>

