<template>
  <div class="app-container">
    <a-result
    status="success"
    title="提交成功"
    sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明。"
  >
    <template #extra>
      <a-button type="primary">返回首页</a-button>
      <a-button>重新执行</a-button>
    </template>
  </a-result>
  </div>
</template>

<script setup>
import cardComp from '@/components/cardComp';
</script>

<style>

</style>>