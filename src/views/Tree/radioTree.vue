<template>
  <div>
    <Tree :data="data2" show-checkbox empty-text="暂无数据"></Tree>
  </div>
</template>

<script>
export default {
  name: "radioTree",
  components: {},
  data() {
    return {
      // data2: [

      // ],
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.demo-tree-render {
  width: 20%;
  // background-color: lightblue;
  /deep/.ivu-tree-title {
    width: 100%;
  }
}
</style>