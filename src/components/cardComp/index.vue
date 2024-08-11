<template>
  <a-card 
    :class="className"
    :hoverable="hoverable" 
    :style="cardStyle"
    :bodyStyle="bodyStyle"
    :headStyle="headStyle"
  >
    <template #extra>
      <slot name="extra" />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #cover>
      <slot name="cover" />
    </template>
    <template #actions>
      <slot name="actions" />
    </template>
    <slot name="content" />
    <a-card-meta 
    v-if="props.cardMeta.title"
    :title="props.cardMeta.title" 
    :description="props.cardMeta.description">
      <template v-if="props.cardMeta.avatarUrl" #avatar>
        <a-avatar :src="props.cardMeta.avatarUrl" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup>
/*
*
*  卡片组件
*
*  @param {Object} cardStyle card外层自定义样式 
*  @param {Object} bodyStyle 内容区自定义样式 
*  @param {Object} headStyle 标题区自定义样式 
*  @param {Object} cardMeta 自定义内容 {title: '标题', description:'描述', avatarUrl:'头像链接'}
*  @param {Boolean} hoverable 是否可悬停
*  @param {String} className 自定义类名
*
*  @solt title 自定义标题插槽 
*  @solt cover 自定义封面图插槽
*  @solt actions 自定义操作插槽
*  @solt content 自定义内容插槽 
*
*/
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
  cardStyle: {
    type: Object,
    default: () => ({}),
  },
  bodyStyle: {
    type: Object,
    default: () => ({padding: '15px'}),
  },
  headStyle: {
    type: Object,
    default: () => ({padding: '15px'}),
  },
  cardMeta: {
    type: Object,
    default: () => ({}),
  }
})
</script>

<style>

</style>