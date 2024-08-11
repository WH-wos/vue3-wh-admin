<template>
  <dl class="dataview-item-wrapper" :class="className" :style="style">
    <dt>
      <a :href="titleLink" target="_blank" v-if="titleLink">
        <a-statistic :title="title" :value="number"/>
      </a>  
      <a-statistic :title="title" :value="number" v-else/>
    </dt>
    <dd>
      <img :src="icon" />
    </dd>
  </dl>
</template>

<script setup>
/*
* 数据统计 - 卡片
* @param {String} title 标题
* @param {Number} number 数字
* @param {String} icon 图标
* @param {String} className 自定义样式
* @param {Object} style 自定义样式
* @param {String} titleLink 标题链接
*/
const props = defineProps({
  title : {
    type: String,
    default: ''
  },
  number : {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => ({})
  },
  titleLink:{
      type: String,
      default: ''
  }
})
</script>

<style lang="scss" scoped>
  .dataview-item-wrapper{
    width: 100%;
    background-color: $base-theme-item-bg;
    border-radius: $base-theme-border-radius;
    padding: 14px 20px 14px 20px;
    display: flex;
    align-items: center; /* 上下居中 */
    dl {
      width: 100%;
      height: 85px;
    }
    dt {
      flex: 1;
      span{
        display: block;
        color: $base-theme-label-text;
      }
    }
    dd {
      margin-left: auto;
      width: 48px;
      height: 48px;
      img{
        display: block;
        width: 100%;
      }
    }
  }
</style>