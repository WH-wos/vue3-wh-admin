<template>
  <a-result
    status="success"
    title="操作成功"
    sub-title="数据编号为: 7f8d9s7a98f7f8d9, 任务将在 1-5 分钟后执行完成，请等待."
  >
    <template #extra>
      <div class="step-form-btn-wrapper">
        <a-space>
          <a-button type="primary" @click="toHome">返回首页</a-button>
          <a-button @click="changeStep">重新执行</a-button>
        </a-space>
      </div>
    </template>
  </a-result>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(["changeStep"])

const changeStep = () => {
  emit("changeStep", {step: 0})
}
const toHome = () => {
  router.push('/')
}

</script>
