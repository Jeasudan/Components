<template>
  <div style="width:20%;">
    <Select v-model="value"
            filterable
            allow-create
            @on-open-change="openChange">
      <Option v-for="item in selectedList"
              :value="item.value"
              :label="item.title"
              :key="item.value">{{ item.title }}</Option>
    </Select>
    <Modal title="查询关联主表"
           v-model="isOpen"
           @on-ok="handleSave"
           @on-cancel="handleCancel">
      <div>
        <Input v-model="selectedValue"
               @on-change="searchValue"
               clearable
               suffix="ios-search" />
      </div>
      <div style="padding:10px">
        <!-- <Tree :data="options" @on-select-change="handleClickNodes"></Tree> -->
        <ul style="height:260px;overflow:auto">
          <li class="listItem"
              style=""
              v-for="item in options"
              :key="item.value"
              @click.stop="selectItem(item)">{{item.title}}</li>
        </ul>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "zSearchInput",
  props: {
    // value: {
    //   type: String
    // },
    // dataModalList: {
    //   type: Array
    // }
  },
  watch: {
    value: {
      handler(newValue) {
        // console.log(newValue)
        if (newValue) {
          this.dataModalList.map(item => {
            if (item.value === newValue) {
              this.selectedList.push(item)
            }
          })
        }
      },
      immediate: true,
      deep: true
    },
    dataModalList: {
      handler(newValue) {
        console.log('dataModalList----', newValue)
        // this.titleList = newValue.map(item => item.title)
        console.log(' this.titleList----', this.titleList)
        // if (newValue) {
        //   this.selectedValue = newValue+
        // } else {
        //   this.selectedValue = this.value
        // }

      },
      immediate: true,
      deep: true
    },
    selectedValue: {
      handler(newValue) {
        console.log('selectedValue-----newValue', newValue)
        if (newValue) {
          this.options = this.dataModalList.filter(array => array.title.match(new RegExp(newValue)));
        } else {
          this.options = this.dataModalList
        }
        // return this.dataModalList = this.titleList.filter(array => array.title.match(newValue));
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      isOpen: false,
      value: "",
      selectedValue: '',
      // titleList: [],
      options: [],
      inputVal: '',
      selectedList: [],
      selectedItem: {},
      dataModalList: []
    }
  },
  created() {
    this.$axios.get('/api/searchOptions').then((res) => {
      //   console.log(this)
      //   console.log(res.data)
      this.dataModalList = res.data.list
    }).catch(function (err) {
      console.log(err);
    })
  },
  methods: {
    searchValue(e) {
      console.log('selectValue------', e.target.value)
    },
    selectItem(item) {
      console.log('item------', item)
      this.selectedValue = item.title
      this.selectedItem = item
    },
    handleSave() {
      this.selectedList = []
      this.value = this.selectedItem.value
      this.options = this.dataModalList
      this.selectedList.push(this.selectedItem)
      this.$emit('changeDataType', this.selectedItem)
    },
    handleCancel() {

    },
    openChange(val) {
      // console.log('openChange', val)
      if (val) {
        this.isOpen = true
        if (this.value == null) {
          this.selectedValue = ''
          this.options = this.dataModalList
        } else {
          this.selectedValue = this.selectedList[0].title

        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ivu-icon-ios-arrow-down:before {
  content: "";
}
/deep/.ivu-select-dropdown {
  display: none;
}
.listItem {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  &:hover {
    color: #2d8cf0;
    background-color: rgb(248, 245, 245);
  }
}
</style>