<template>
  <Form :model="formItem"
        :label-width="80"
        :inline="isInline">
    <div v-if="conditionConfig && conditionConfig.length>0">
      <FormItem v-for="item in conditionConfig"
                :key="item.key"
                :label="item.label">
        <component :is="item.conditionType"
                   v-model="formItem[item.code]"
                   :conditionOption="item.conditionOption"></component>
      </FormItem>

      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </div>
    <div v-else
         style="height:100px;width:100%;">暂无数据</div>
  </Form>
</template>
<script>
import JInput from './components/Inputs.vue'
import JCheckbox from './components/Checkboxs.vue'
import JSelect from './components/Selects.vue'
import JRadio from './components/Radios.vue'
import JDatepicker from './components/Datepickers.vue'
import JSwitch from './components/Switches.vue'
import JTreeSelect from './components/TreeSelect.vue'
export default {
  name: 'dynamicForm',
  components: {
    JInput,
    JCheckbox,
    JSelect,
    JRadio,
    JDatepicker,
    JSwitch,
    JTreeSelect
  },
  props: {
    //查询条件配置
    conditionConfig: {
      type: Array,
      default: () => []
    },
    // 是否开启行内表单样式
    isInline: {
      type: Boolean,
      default: true
    },

  },
  data() {
    return {
      formItem: {
        // input: '',
        // select: '',
        // radio: 'male',
        // checkbox: [],
        // switch: true,
        // date: '',
      }
    }
  },
  created() {

    console.log('conditionConfig--', this.conditionConfig)
    this.conditionConfig.map(item => {
      this.formItem[item.code] = item.value
    })
  }
}
</script>
