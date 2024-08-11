<template>
  <a-modal 
    :open="visible" 
    :title="title" 
    :width="width"
    :on-cancel="handleCancel" 
    :confirm-loading="confirmLoading" 
    :maskClosable="false"
    @ok="handleOk" 
    @cancel="handleCancel"
  >
    <slot></slot>
    <template v-if="isFoorter" #footer>
      <slot name="footer" />
    </template>
  </a-modal>
</template>

<script setup>
/*
* 弹窗组件
* @param visible: 是否显示
* @param title: 标题
* @param confirmLoading: 是否显示加载中
* @param width: 宽度
* @param isFoorter: 是否显示底部按钮
*
* @slot: 弹窗内容
*
* @event handleCancel: 点击取消按钮
* @event handleOk: 点击确定按钮
*/

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "操作"
  },
  confirmLoading: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: "700px"
  },
  isFoorter: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["handleCancel", "handleOk"]);

const handleCancel = () => {
  emit("handleCancel", ''); 
};

const handleOk = () => {
  emit("handleOk",''); 
};
  

</script>
