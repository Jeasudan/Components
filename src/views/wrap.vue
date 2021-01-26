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
        <!-- <div style="height:36px;background:lightblue;margin-bottom:5px;"> -->
        <!-- <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
            <TabPane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</TabPane>
          </Tabs> -->
        <!-- </div> -->
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
    return {
      tabList: [
        {
          label: '标签一',
          name: 'name1'
        },
        {
          label: '标签二',
          name: 'name2'
        },
        {
          label: '标签三',
          name: 'name3'
        },
        {
          label: '标签四',
          name: 'name4'
        },
        {
          label: '标签五',
          name: 'name5'
        }
      ]
    };
  },
  created() {
    // this.$axios.get('/api/tableData').then((res) => {
    //   this.tableData = res.data.data
    // }).catch(function (err) {
    //   console.log(err);
    // });
  },
  methods: {
    handleDragDrop(name, newName, a, b, names) {
      // names 为调整后的 name 集合
      this.tabList.splice(b, 1, ...this.tabList.splice(a, 1, this.tabList[b]));
      console.log('names', names);
    }
  }
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

