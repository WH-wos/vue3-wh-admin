<template>
  <div class="app-container">
    <div class="step-form-layer">
      <a-steps
      :current="defultCurrent"
      :items="[
        {
          title: '第一步',
        },
        {
          title: '第二步',
        },
        {
          title: '完成',
        },
      ]"
      ></a-steps>

      <div class="step-form-content">
          <step-one v-if="defultCurrent === 0" @changeStep="changeStep"></step-one>
          <step-two v-if="defultCurrent === 1"  @changeStep="changeStep"></step-two>
          <step-result v-if="defultCurrent === 2"  @changeStep="changeStep"></step-result>
      </div>
    </div>
  </div>
</template>

<script setup>
import stepOne from './stepOne'
import stepTwo from './stepTwo'
import stepResult from './stepResult'

const defultCurrent = ref(0)

const changeStep = (e) => {
  defultCurrent.value = e.step
}
</script>

<style lang="scss" scoped>
.step-form-layer{
  margin: 40px auto;
}
</style>