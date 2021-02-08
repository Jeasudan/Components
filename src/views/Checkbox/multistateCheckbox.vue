<template>
  <div class="checkboxWrap">
    <div @click.stop="changeState">
      <span onselectstart="return false"
            style="background-color: #005791;"
            v-show="value === 1">&radic;</span>
      <span onselectstart="return false"
            v-show="value === 0">&nbsp;</span>
      <span onselectstart="return false"
            style="background-color: #005791;"
            v-show="value === -1">&times;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "mycheckbox",
  props: {
    value: {
      type: Number,
      default: 0
    },
    // changeState:{
    //   type:Function
    // }
  },
  data() {
    return {
      newValue: 0
    }
  },
  methods: {
    changeState() {
      let count = 0
      if (this.value === 0) {
        count = 0
      } else if (this.value === 1) {
        count = 1
      } else if (this.value === -1) {
        count = 2
      }
      console.log('count----', count);
      return count
      //   this.$emit('changeState',count)
      //
    }
  }
}
</script>
<style lang="less" scoped>
span {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #fff;
}
</style>