<template>
  <div ref="tableWrap" class="combinePage" :style="{height:wrapHeight}">
    <!-- <div style="height:400px"> -->
    <Table ref=table :height="tableHeight" :columns="columns1" :data="tableData"></Table>
    <!-- </div> -->

    <div class="pageWrap">
      <Page :total="100" show-sizer show-elevator />
    </div>
  </div>
</template>

<script>
export default {
  name: "combinePage",
  components: {},
  data() {
    return {
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
        }
      ],
      tableData: [],
      wrapHeight: 500

    }
  },
  computed: {

  },
  created() {
    this.$axios.get('/api/tableData').then((res) => {
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
    this.$nextTick(() => {
      // let clientHeight = document.documentElement.clientHeight
      // this.tableHeight = clientHeight - 120
      this.getHeight();
    })
    window.onresize = () => {
      this.getHeight();
    }

  },
  methods: {
    getHeight() {
      console.log('document.body.offsetHeight', document.body.offsetHeight)
      console.log('table', this.$refs.tableWrap.clientHeight)
      this.wrapHeight = document.body.offsetHeight - 120
      // this.wrapHeight = this.$refs.tableWrap.clientHeight - 120
    }
  }
};
</script>

<style scoped lang="less">
.pageWrap {
  margin: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
