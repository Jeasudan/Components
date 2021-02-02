<template>
  <div class="wrap">
    <Tree :data="treeData"
          ref="tree"
          :render="renderContent"></Tree>

  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [{
        title: 'parent 1',
        expand: true,
        selected: true,
        value: '1',
        children: [
          {
            title: 'parent 1-1',
            expand: true,
            value: '11',
            children: [
              {
                value: '111',
                title: 'leaf 1-1-1'
              },
              {
                value: '112',
                title: 'leaf 1-1-2'
              }
            ]
          },
          {
            title: 'parent 1-2',
            value: '12',
            expand: true,
            children: [
              {
                value: '121',
                title: 'leaf 1-2-1'
              },
              {
                value: '122',
                title: 'leaf 1-2-2'
              }
            ]
          }
        ]
      }],
    };
  },
  methods: {
    // 子节点的option
    renderContent(h, { data }) {
      return h('Option', {
        style: {
          display: 'inline-block',
          margin: '0'
        },
        props: {
          value: data.value
        }
      }, data.title);
    },
  },
};
</script>
<style scoped lang="less">
// .wrap {
//   padding: 10px;
//   background-color: #fff;
//   input {
//     height: 36px;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     outline: lightblue;
//   }
// }
</style>