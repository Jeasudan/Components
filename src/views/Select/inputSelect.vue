<template>
  <div class="wrap">
    <datalist id="subjects">
      <option value="java">好</option>
      <option value="c++" label="呵呵"></option>
      <option value="js" label="不知道"></option>
    </datalist>
    <input
      type="text"
      list="subjects"
      width="200px;"
      :value="val"
      @change="getValue"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
    };
  },
  methods: {
    getValue(e) {
      console.log(e.target.value);
    },
  },
};
</script>
<style scoped lang="less">
.wrap {
  padding: 10px;
  background-color: #fff;
  input {
    height: 36px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: lightblue;
  }
}
</style>