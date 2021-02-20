<template>
  <div class="haha">
    <div style="width:200px;display:flex;justify-content:space-between;margin-bottom:10px">
      <Button type="primary"
              @click="handlename('JCheckboxs')">Checkbox</Button>
      <Button type="primary"
              @click="handlename('JInput')">Input</Button>
    </div>

    <!-- component vue提供的固定标签 动态绑定thisView -->
    <keep-alive>
      <component :is="thisView"
                 style="height:300px">
      </component>
    </keep-alive>

  </div>
</template>
<script>
import JCheckboxs from './components/Checkboxs.vue'
import JInput from './components/Inputs.vue'
export default {
  components: { JCheckboxs, JInput },
  // name: 'fsdgfc',
  data() {
    return {
      thisView: 'JInput',
      single: false,
      value: ''
    }
  },
  methods: {
    handlename(value) {
      // 设置thisView的值 并实现效果
      console.log('value', value)
      this.thisView = value
    }

  }
}
</script>
<style scoped lang="less">
.haha {
  height: 600px;
}
</style>