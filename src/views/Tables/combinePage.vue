<template>
  <div ref="tableWrap"
       class="combinePage">
    <JTable :cols="columns1"
            :height="tableHeight"
            :url="url"
            :tableData="tableData"
            @onSelect="onSelect"
            ref="jtable">
      <div slot="toolButtons"
           class="toolButtons">
        <div>
          <Input type="text"
                 search
                 placeholder="请输入查询条件"
                 style="width:200px" />
        </div>
        <div>
          <Button type="primary"
                  @click="add">新增</Button>
        </div>

        <!-- <Button type="error"
                @click="batchDelete">删除</Button> -->
      </div>
    </JTable>
  </div>
</template>

<script>
import JTable from '../../components/jeasuTable'
export default {
  name: "combinePage",
  components: { JTable },
  data() {
    return {
      url: '/api/tableData',
      tableHeight: 600,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          render: (h) => {
            return h('div', {

            }, [
              h('a', {
                style: {
                  dispaly: 'inline-block',
                  marginRight: '10px'
                }
              }, '修改'),
              h('a', {
                style: {
                  dispaly: 'inline-block',
                  marginRight: '10px'
                }
              }, '删除'),
            ])
          }
        }
      ],
      tableData: [],

    }
  },
  computed: {

  },
  created() {
    this.$axios.get(this.url).then((res) => {
      this.tableData = res.data.data
    }).catch(function (err) {
      console.log(err);
    });
    // this.$axios.get('/api/treeData').then(function (res) {
    //   console.log(res.data);
    // }).catch(function (err) {
    //   console.log(err);
    // });
  },
  mounted() {
    // this.$nextTick(() => {
    //   // let clientHeight = document.documentElement.clientHeight
    //   // this.tableHeight = clientHeight - 120
    //   this.getHeight();
    // })
    // window.onresize = () => {
    //   this.getHeight();
    // }

  },
  methods: {
    // getHeight() {
    //   console.log('document.body.offsetHeight', document.body.offsetHeight)
    //   console.log('table', this.$refs.tableWrap.clientHeight)
    //   this.wrapHeight = document.body.offsetHeight - 120
    //   // this.wrapHeight = this.$refs.tableWrap.clientHeight - 120
    // }
    onSelect(option) {
      console.log('option', option)
    },
    //列表方法
    add() {
      // this.showUserAddModal()
    },
    batchDelete() {
      // if (this.selectedItem) {
      //   const userIds = new Array()
      //   this.selectedItem.forEach((k, v) => {
      //     userIds.push(k.userId)
      //   })
      //   this.$http.delete('/sysUser/deleteBatch', userIds).then(res => {
      //     WT.toast.success("删除成功")
      //     this.reloadDataGrid()
      //   })
      // }
    }
  }
};
</script>

<style scoped lang="less">
.combinePage {
  .toolButtons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
