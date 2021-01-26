

<template>
  <div class=treeSelect>
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,
      options: []
      // define options
      // "options": [{
      //   "id": 'avdfv',
      //   "label": 'avdfv',
      //   "children": [{
      //     "id": 'aavdfvfd',
      //     "label": 'aavdvfd',
      //   }, {
      //     "id": 'abvdfvf',
      //     "label": 'abvdfvd',
      //   }],
      // }, {
      //   "id": 'bdfvd',
      //   "label": 'bvdfvf',
      //   "children": [{
      //     "id": 'aavdfvfd',
      //     "label": 'aavdvfd',
      //   }, {
      //     "id": 'abvdfvf',
      //     "label": 'abvdfvd',
      //   }],
      // }, {
      //   "id": 'cvdf',
      //   "label": 'cvdfv',
      //   "children": [{
      //     "id": 'aavdfvfd',
      //     "label": 'aavdvfd',
      //   }, {
      //     "id": 'abvdfvf',
      //     "label": 'abvdfvd',
      //   }],
      // }],
    }

  },
  created() {
    this.$axios.get('/api/treeSelect').then((res) => {
      this.options = res.data.data
    }).catch(function (err) {
      console.log(err);
    });
  }
};
</script>
<style scoped lang="less">
.treeSelect {
  .vue-treeselect {
    /deep/.vue-treeselect__multi-value-item {
      background: none;
      border: 1px solid #ddd;
      border-radius: 3px;
      color: inherit;
      &:hover {
        border: 1px solid #039be5;
      }
      &:hover .vue-treeselect__value-remove {
        color: #039be5;
      }
      .vue-treeselect__value-remove {
        color: inherit;
        &:hover {
          color: #039be5;
        }
      }
    }
  }
}
</style>