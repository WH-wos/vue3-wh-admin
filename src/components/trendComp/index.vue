<template>
  <div class="trend-chart" :class="className">
    <label v-if="label">{{ label }}</label>
    <span>{{ percent }}</span>
    <component :is="icon" :style="{color: color}"></component>
  </div>
</template>

<script setup>
/*
* 百分比趋势组件
* @param {String} label 标签
* @param {String} percent 百分比
* @param {String} icon 图标
* @param {String} className 样式类名
* @param {String} color 图标颜色
*/

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  percent:{
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss" scoped>
.trend-chart{
  font-size: 14px;
  label {
    display: inline-block;
    margin-right: 10px;
  }
  span{
    display: inline-block;
    margin-right: 5px;
  }
}
</style>

