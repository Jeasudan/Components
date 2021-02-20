<template>
  <div>
    <Tree :data="data5"
          :show-checkbox="false"
          multiple
          :render="renderContent"
          class="demo-tree-render"></Tree>
  </div>
</template>

<script>
export default {
  name: "radioTree",
  components: {},
  data() {
    return {
      data5: [
        {
          title: 'parent 1', //渲染的是父节点
          expand: true,
          render: (h, { root, node, data }) => {
            // render: (h, { data }) => {
            return h('div', {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }
            }, [
              h('span', [
                //渲染icon图标
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                //渲染节点名称
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  marginRight: '32px'
                }
              }, [
                h('Icon', {
                  props: Object.assign({}, this.buttonProps, {
                    type: 'ios-add-circle-outline',
                    size: 18
                  }),
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => { this.append(data) }
                  }
                }),
                h('Icon', {
                  props: Object.assign({}, this.buttonProps, {
                    type: 'ios-close-circle-outline',
                    size: 18
                  }),
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => { this.remove(root, node, data) }
                  }
                }),
                h('Icon', {
                  props: Object.assign({}, this.buttonProps, {
                    type: 'ios-create-outline',
                    size: 18
                  }),
                  on: {
                    click: () => { this.edit(root, node, data) }
                  }
                })
              ])
            ]);
          },
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small',
      }
    };
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            marginRight: '32px'
          }
        }, [
          h('Icon', {
            props: Object.assign({}, this.buttonProps, {
              type: 'ios-add-circle-outline',
              size: 18
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.append(data) }
            }
          }),
          h('Icon', {
            props: Object.assign({}, this.buttonProps, {
              type: 'ios-close-circle-outline',
              size: 18
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.remove(root, node, data) }
            }
          }),
          h('Icon', {
            props: Object.assign({}, this.buttonProps, {
              type: 'ios-create-outline',
              size: 18
            }),
            on: {
              click: () => { this.edit(root, node, data) }
            }
          })
        ])
      ]);
    },
    append(data) {
      const children = data.children || [];
      children.push({
        title: 'appended node',
        expand: true
      });
      this.$set(data, 'children', children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    },
    edit(root, node, data) {
      console.log(root, node, data)

    }
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