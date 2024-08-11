<template>
  <div>
    <upload-file-comp ref="uploadFileCompRef"></upload-file-comp>
    <div class="step-form-btn-wrapper">
      <a-button type="primary" v-debounce-click="getFilList" :loading="nextLoad">下一步</a-button>
    </div> 
  </div>  
</template>

<script setup>
import { message } from 'ant-design-vue';
import uploadFileComp from '@/components/uploadFileComp';
import { uploadFiles } from '@/api/template/business'

const emit = defineEmits(["changeStep"])
const uploadFileCompRef = ref(null);
const fileList = ref([]);
const resultList = ref([])
const nextLoad = ref(false);

const getFilList = () => {
  fileList.value = uploadFileCompRef.value.sendFileList();
  if (fileList.value.length == 0) {
    message.warn('请上传文件')
    return false
  }
  
  let formData = new FormData();
  fileList.value.forEach(file => {
    formData.append('file', file.raw);
  });
  nextLoad.value = true
  uploadFiles(formData).then((res) => {
    resultList.value = res
    nextLoad.value = false
    changeStep()
  }).catch((err) => {
    nextLoad.value = false
  });
}

const changeStep = () => {
  if (fileList.value.length == 0) {
    message.warn('请上传文件')
    return false
  }
  emit("changeStep", { step: 1, result: resultList.value })
}

</script>

<style>

</style>