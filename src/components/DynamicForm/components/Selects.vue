<template>
  <div>
    <Select v-model="selectValue"
            :placeholder="conditionOption.placeholder"
            :multiple="conditionOption.multiple">

      <Option v-for="(item,index) in conditionOption.options"
              :key='index'
              :value="item.value">{{item.label}}</Option>

    </Select>
  </div>
</template>

<script>
export default {
  name: "JSelect",
  data() {
    return {
      selectValue: ''
    }
  },
  props: {
    value: {

    },
    conditionOption: {
      type: Object,
      default: () => { }
    },
  },
  created() {
    this.selectValue = this.value
    console.log('conditionOption----JSelect---', this.conditionOption)
  }
};
</script>

<style>
</style>