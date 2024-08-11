<template>
  <div class="card-container-layer card-clearfix" :style="style">
    <div class="card-container-content" :style="{ width: 'calc(100% - ' + imageWidth + ' - ' + interspace + ')' }">
      <h1>{{ title }}</h1>
      <div class="card-container-description">
        {{ desc }}
        <slot name="desc"></slot>
      </div>
    </div>
    <div class="card-container-img" :style="{width: imageWidth}" v-if="hasImage">
      <img :src="image" width="100%" alt="" />
    </div>
  </div>
</template>

<script setup>

/*
*
* 主体内容 卡片组件
* @param {String} title 标题
* @param {String} desc 描述
* @param {String} image 图片地址
* @param {Object} style 样式
* @param {String} imageWidth 图片宽度
* @param {String} interspace 图片与内容间距
* @param {Boolean} hasImage 是否有图片
*
* @slot desc 描述插槽
*
*/


const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: () => import('./card-container-img.png')
  },
  style: {
    type: Object,
    default: () => ({})
  },
  imageWidth: {
    type: String,
    default: '160px'
  },
  interspace: {
    type: String,
    default: '50px'
  },
  hasImage: {
    type: Boolean,
    default: true
  }
})

</script>

<style scoped>
.card-container-layer{
  width: 100%;
  height: auto;
}
.card-container-content{
  float: left;
}
.card-container-content h1{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}
.card-container-content .card-container-description{
  width: 100%;
  line-height: 20px;
}
.card-container-img {
  float: right;
  width: 160px;
}
.card-clearfix::after{
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

</style>