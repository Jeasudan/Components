<template>
  <div>
    <i-switch v-model="switchValue"
              size="large">
      <span slot="open">On</span>
      <span slot="close">Off</span>
    </i-switch>
  </div>
</template>

<script>
export default {
  name: "JSwitch",
  data() {
    return {
      switchValue: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    conditionOption: {
      type: Object,
      default: () => { }
    },
  },
  created() {
    this.switchValue = this.value
    // console.log('this.value---JSwitch---', this.value)
    console.log('conditionOption---JSwitch---', this.conditionOption)
  }
};
</script>

<style>
</style>