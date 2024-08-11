<template>
  <div class="app-container">
    <a-result
    status="error"
    title="提交失败"
    sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明。"
  >
    <template #extra>
      <a-button>重新执行</a-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px">
        <strong>您提交的内容有如下错误：</strong>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        您的账户已被冻结
        <a>立即解冻 &gt;</a>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        您的账户还不具备申请资格
        <a>立即升级  &gt;</a>
      </p>
    </div>

  </a-result>
  </div>
</template>

<script setup>
import cardComp from '@/components/cardComp';
</script>

<style>

</style>>