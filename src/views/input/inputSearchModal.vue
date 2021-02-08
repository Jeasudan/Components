<template>
  <div>
    <div ref="selectBox">
      <Select v-model="value"
              filterable
              allow-create
              @on-open-change="openChange">
        <Option v-for="(item,index) in selectedList"
                :value="item.value"
                :label="item.title"
                :key="index">{{ item.title }}</Option>
      </Select>
    </div>
    <Modal title="查询关联主表"
           v-model="isOpen"
           @on-ok="handleSave"
           @on-cancel="handleCancel">
      <div>
        <!-- <Input v-model="selectedValue" @on-change="searchValue" clearable suffix="ios-search" /> -->
        <Input v-model="selectedValue"
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
// import gitAccess from '@app/src/assets/js/gitAccess.js';
export default {
  name: "zSearchInput",
  props: {
    //表单绑定的值
    // value: {
    //   type: String
    // },
    // metadataFullInfo: {
    //   type: Object
    // }
  },
  watch: {
    value: {
      handler(newValue) {
        // console.log(newValue)
        this.getDataModalList()
        if (newValue) {
          if (this.dataModalList.length > 0) {
            this.dataModalList.map(item => {
              if (item.value === newValue) {
                this.selectedList.push(item)
              }
            })
          }
        } else {  //新建单据，关联主表内容不填的话，会随上一个切换单据 ，解决这个问题
          // this.$emit('changeDataType', '')
          this.selectedValue = ''
          this.options = this.dataModalList
        }
      },
      immediate: true,
      //   deep: true
    },
    dataModalList: {
      // handler(newValue) {
      // },
      // immediate: true,
      // deep: true
    },
    selectedValue: {  //监听模糊查询的value值，处理过滤的数据
      handler(newValue) { //newValue是title
        // console.log('selectedValue --的--newValue', newValue)
        if (newValue) {  //过滤数据
          this.options = this.dataModalList.filter(array => array.title.match(new RegExp(newValue)));
        } else {
          this.options = this.dataModalList
        }
      },
      immediate: true,
      deep: true
    },
    // metadataFullInfo: {
    //   handler(newValue) {
    //     // 监听返回的数据,若dataType有值,补充下拉数据以回显
    //     const dataType = newValue.content.dataType
    //     // console.log('metadataFullInfo---------', newValue)
    //     // console.log('this.dataModalList---------', this.dataModalList)
    //     // console.log('this.selectedList---------', this.selectedList)
    //     this.selectedList = this.dataModalList.filter(item => item.value === dataType)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  data() {
    return {
      value: '123',
      isOpen: false,
      selectedValue: '',  //模糊搜索内容
      options: [],   //查询列表展示的数据
      selectedList: [],  //表单里被隐藏的下拉数据
      selectedItem: {},  //选中的数据对象
      dataModalList: []   //全部数据
      // dataModalList: []
    }
  },
  created() {
    //获取全部数据
    this.getDataModalList()
  },
  methods: {
    getDataModalList() {
      // let dataModalList = gitAccess.getMetadataInfoByDefine("bcp.type.Class");
      // dataModalList.map((item) => { item.value = item.name })
      // this.dataModalList = dataModalList;
    },
    selectItem(item) {
      // console.log('item------', item)
      this.selectedValue = item.title
      this.selectedItem = item
    },
    handleSave() {
      //选中后点击确定的时候，先将下拉数据置空
      this.selectedList = []
      this.options = this.dataModalList
      this.selectedList.push(this.selectedItem)
      this.$emit('changeDataType', this.selectedItem.value)
    },
    handleCancel() {
      this.selectedValue = ""
    },
    //点击打开下拉框触发
    openChange(val) {
      // console.log('openChange', val)
      this.$refs.selectBox.click()
      if (val) {  //open的话，弹出弹窗
        this.isOpen = true
        //处理数据回显
        if (this.value) {
          //当回显的数据不为空时，模糊搜索内容
          const filterItem = this.dataModalList.filter(item => item.value === this.value)
          // this.selectedValue = filterItem[0].title
          this.options = this.dataModalList.filter(array => array.title.match(new RegExp(filterItem[0].title)));
        } else {
          this.selectedValue = ''

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