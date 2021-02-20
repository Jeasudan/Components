<template>
  <div class="dynamicForm">
    <DynamicForm :conditionConfig="conditionConfig"
                 :isInline="isInline"></DynamicForm>
  </div>
</template>

<script>
import DynamicForm from '../../components/DynamicForm/index.vue'
export default {
  name: "index",
  components: { DynamicForm },
  data() {
    return {
      isInline: false,
      conditionConfig: [
        {
          key: 1,
          code: 'input',
          label: '输入框',
          conditionType: 'JInput',  //判断展示何种组件
          value: 'bfg',
          conditionOption: {
            type: '',//text/Number
            size: '',
            placeholder: '请输入...',
            // actions: [
            //   { name: 'onClear', params: {} },
            //   { name: 'onChange', params: {} }
            // ]
          }
        },
        {
          key: 2,
          code: 'checkbox',
          label: '复选框',
          conditionType: 'JCheckbox',  //判断展示何种组件
          value: ['Sleep'],
          conditionOption: {
            options: [
              { label: "Eat" },
              { label: "Sleep" },
              { label: "Run" },
              { label: "Movie" },
            ]
          }
        },

        {
          key: 3,
          code: 'select',
          label: '多选下拉',
          conditionType: 'JSelect',
          conditionApi: '/123',
          value: ['value1'],
          conditionOption: {
            multiple: true,
            size: '',
            placeholder: '请选择',
            isGroup: true,
            options: [
              {
                label: '选项一',
                value: 'value1',
                disabled: false
              },
              {
                label: '选项二',
                value: 'value2',
                disabled: false
              }
            ],

          }
        },

        {
          key: 4,
          code: 'date',
          label: '日期查询',
          conditionType: 'JDatepicker',
          value: '2021-02-20',
          conditionOption: {
            // type:'month',
            // type:'year',
            // type:'datetimerange',
            // type:'datetime',
            // type:'daterange',
            type: 'date',
            size: '',
            placeholder: '请选择日期'
          }
        },
        {
          key: 5,
          code: 'radio',
          label: '单选',
          conditionType: 'JRadio',  //判断展示何种组件
          value: 'male',
          conditionOption: {
            options: [
              { label: "male", name: "Male" },
              { label: "female", name: "Female" }
            ]
          }
        },
        {
          key: 6,
          code: 'switch',
          label: '开关',
          conditionType: 'JSwitch',
          value: true,
          conditionOption: {

          }
        },
        {
          key: 7,
          code: 'treeselect',
          label: '树形下拉',
          conditionType: 'JTreeSelect',
          value: ['00011'],
          conditionOption: {
            multiple: true,
            clearable: true,
            searchable: true,
            size: '',
            placeholder: '请选择',
            options: [
              {
                id: "0000",
                label: "北京市",
                children: [
                  {
                    id: "00011",
                    label: "朝阳区"
                  },
                  {
                    id: "00012",
                    label: "东城区"
                  }
                ]
              },
              {
                id: "0002",
                label: "安徽省",
                children: [
                  {
                    id: "00021",
                    label: "合肥市"
                  },
                  {
                    id: "00022",
                    label: "芜湖市"
                  }
                ]
              },
              {
                id: "0003",
                label: "浙江省",
                children: [
                  {
                    id: "00031",
                    label: "杭州市"
                  },
                  {
                    id: "00032",
                    label: "温州"
                  }
                ]
              }
            ]
          }
        },
      ]
    }
  }
};
</script>

<style scoped lang="less">
.dynamicForm {
  width: 30%;
}
</style>