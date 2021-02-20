<template>
  <div>
    <RadioGroup v-model="radioValue">
      <Radio v-for="(item,index) in conditionOption.options"
             :key='index'
             :label="item.label">{{item.name}}</Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: "JRadio",
  data() {
    return {
      radioValue: ''
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
    this.radioValue = this.value
    console.log('conditionOption---JRadio---', this.conditionOption)
  }
};
</script>

<style>
</style>