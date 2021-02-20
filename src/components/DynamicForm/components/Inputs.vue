<template>
  <div>
    <Input v-model="inputValue"
           placeholder="Enter something..." />
  </div>
</template>

<script>
export default {
  name: "JInput",
  data() {
    return {
      inputValue: ''
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
    this.inputValue = this.value
    console.log('conditionOption--JInput-----', this.conditionOption)
  }
};
</script>

<style>
</style>