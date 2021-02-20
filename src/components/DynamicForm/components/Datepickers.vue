<template>
  <div>
    <DatePicker :type="conditionOption.type"
                :placeholder="conditionOption.placeholder"
                v-model="dateValue"
                @on-change="selectDate"></DatePicker>
  </div>
</template>

<script>
export default {
  name: "JDatepicker",
  data() {
    return {
      dateValue: ''
    }
  },
  props: {
    value: {
      type: String,
    },
    conditionOption: {
      type: Object,
      default: () => { }
    },
  },
  created() {
    this.dateValue = this.value
    console.log('this.value---JDatepicker---', this.value)
    console.log('conditionOption---JDatepicker---', this.conditionOption)
  },
  methods: {
    selectDate(date, type) {
      console.log('date,type----', date, type)
    }
  }
};
</script>

<style>
</style>