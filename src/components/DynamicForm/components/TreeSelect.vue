<template>
  <div class=treeSelect>
    <Treeselect v-model="treeSelectValue"
                :multiple="multiple"
                :options="conditionOption.options"
                :placeholder="conditionOption.placeholder"
                :clearable="clearable"
                :searchable="searchable" />

  </div>
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: "JTreeSelect",
  components: { Treeselect },
  data() {
    return {
      // define the default value
      treeSelectValue: [],
      options: [{
        id: "0000",
        label: "北京市",
        children: [{
          id: "00011",
          label: "朝阳区"
        }, {
          id: "00012",
          label: "东城区"
        }]
      }, {
        id: "0002",
        label: "安徽省",
        children: [{
          id: "00021",
          label: "合肥市"
        }, {
          id: "00022",
          label: "芜湖市"
        }]
      }, {
        id: "0003",
        label: "浙江省",
        children: [{
          id: "00031",
          label: "杭州市"
        }, {
          id: "00032",
          label: "温州"
        }]
      }],
      multiple: true,
      clearable: true,
      searchable: true,
    }
  },
  props: {
    value: {
      type: Array
    },
    conditionOption: {
      type: Object,
      default: () => { }
    },
  },
  created() {
    this.treeSelectValue = this.value
    console.log('conditionOption---JTreeSelect--', this.conditionOption)
  }
};
</script>
<style scoped lang="less">
.treeSelect {
  width: 20%;
  //   height: 32px;
  .vue-treeselect {
    /deep/.vue-treeselect__multi-value {
      height: 34px;
      margin-bottom: 0;
      .vue-treeselect__multi-value-item-container {
        padding: 3px 5px 3px 0;
        .vue-treeselect__multi-value-item {
          height: 28px !important;
          line-height: 24px;
          display: block;
          background: none;
          border: 1px solid #ddd;
          border-radius: 3px;
          color: inherit;
          &:hover {
            border: 1px solid #039be5;
          }
          &:hover .vue-treeselect__value-remove {
            color: #039be5;
          }
          .vue-treeselect__value-remove {
            color: inherit;
            &:hover {
              color: #039be5;
            }
          }
        }
      }
    }
  }
}
</style>