<template>
  <div>
    <Menu
      :active-name="0"
      ref="menu"
      theme="dark"
      width="auto"
      :open-names="['1', '2', '3', '4']"
    >
      <div>
        <MenuItem name="0" to="home">
          <Icon type="ios-home-outline" />
          首页
        </MenuItem>
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-grid" />
            表格
          </template>
          <MenuItem name="1-1" to="activeColumn">动态列</MenuItem>
          <MenuItem name="1-2" to="asyncTreeData">异步树形</MenuItem>
          <MenuItem name="1-3" to="combinePage">合并page</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-leaf-outline" />
            树形
          </template>
          <MenuItem name="2-1" to="radioTree">单选树</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-list-box-outline" />
            表单
          </template>
          <MenuItem name="3-1" to="dynamicForm">动态表单</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-list-box-outline" />
            选择器
          </template>
          <MenuItem name="4-1" to="inputSelect">可输入下拉</MenuItem>
          <MenuItem name="4-2" to="treeSelect">树形下拉</MenuItem>
        </Submenu>
      </div>
    </Menu>
  </div>
</template>

<script>
// import MenuList from "./menuList";
export default {
  name: "menu",
  // mixins: [MenuList],
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.$refs.menu.updateOpened();
      this.$refs.menu.updateActiveName();
    });
  },
  methods: {},
};
</script>

<style scoped lang="less">
</style>