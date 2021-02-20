<template>
  <div>
    <CheckboxGroup v-model="checkValue">
      <Checkbox v-for="(item,index) in conditionOption.options"
                :key="index"
                :label="item.label"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: "JCheckbox",
  data() {
    return {
      single: false,
      checkValue: []
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
    this.checkValue = this.value
    console.log('conditionOption---JCheckbox--', this.conditionOption)
  }
};
</script>

<style>
</style>