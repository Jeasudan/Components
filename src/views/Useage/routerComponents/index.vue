<template>
  <div>
    <div style="margin:8px;width:160px;display:flex;justify-content:space-between;">
      <Button type="primary"
              to="A">A</Button>
      <Button type="primary"
              to='B'>B</Button>
    </div>
    <router-view></router-view>
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