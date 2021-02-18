<template>
  <div class="JTable">
    <div class="buttonGroup">
      <slot name="toolButtons"></slot>
    </div>
    <Table border
           :height='height'
           stripe
           :columns="cols"
           :data="tableData"
           @on-selection-change="onSelect"></Table>
    <span style="margin-top:5px;float: left">已选择 <span style="font-size:15px">{{num}}</span> 条</span>
    <Page ref="paging"
          show-sizer
          show-elevator
          v-if="pagingOption.showPaging"
          :total="total"
          style="margin-top:5px;float: right"
          :show-total="pagingOption.showTotal"
          @on-change="getData"></Page>
  </div>
</template>

<script>
export default {
  name: 'JTable',
  data() {
    return {
      current: 1,
      pageSize: 10,
      // tableData: [],
      loading: false,
      total: 0,
      initPage: 1,
      num: 0
    }
  },
  props: {
    height: {
      type: Number,
      default: 600
    },
    url: {
      type: String,
      require: true
    },
    pagingOption: {
      type: Object,
      default: function () {
        return {
          showPaging: true,
          showTotal: true
        }
      }
    },
    cols: {},
    tableData: [],
    checkBox: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    refresh() {
      this.getData(1)
    },

    getData(pageNum) {
      this.loading = true
      this.$axios.get(this.url, this.getPagingInfo(pageNum)).then(res => {
        // this.$axios.get(this.url).then(res => {
        this.tableData = res.result.data
        this.total = res.result.total
        this.loading = false
      })
    },
    getPagingInfo(page) {
      const param = {
        current: page,
        pageSize: this.pageSize
      }
      return param
    },
    onSelect(selection) {
      this.num = selection.length
      this.$emit('onSelect', {
        selection: selection
      })
    }
  },
  mounted() {
    this.getData(this.initPage)
  },
  created() {
    if (this.checkBox) {
      this.cols.unshift({
        type: 'selection',
        width: 60,
        align: 'center'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// .margin(@border_width:10px) {
//   margin-bottom: @border_width;
// }

.buttonGroup {
  margin: 5px 0;
  // display: flex;
  // justify-content: space-between;
  // text-align: right;
  // .margin(5px);
  // .toolButtons {
  //   display: flex;
  //   justify-content: space-between;
  // }
}
</style>