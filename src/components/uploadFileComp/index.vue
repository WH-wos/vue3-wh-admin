<template>
  <div>
    <a-upload-dragger
      v-model:file-list="fileList"
      name="file"
      :multiple="multiple"
      :max-count="maxFileCount"
      :before-upload="beforeUpload" 
      @remove="handleRemove"
    >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">单击或拖动文件到此区域进行上传</p>
    <p class="ant-upload-hint">
      单个{{multiple ? '或批量' : ''}}上传，个数限制为{{maxFileCount}}个，文件大小不能超过{{maxFileSize}}M。
    </p>
  </a-upload-dragger>
  </div>
</template>

<script setup>
/*
* 文件上传组件
* 
* @param {Boolean} multiple 是否支持批量上传
* @param {Array} allowedFileTypes 允许的文件类型，可以根据需要修改
* @param {Number} maxFileSize 允许的最大文件大小，单位是MB，可以根据需要修改
* @param {Number} maxFileCount 允许的最大文件数量
*/
import { message, Upload } from 'ant-design-vue';

const fileList = ref([]);

const props = defineProps({
  multiple: {
    type: Boolean,
    default: true
  },
  allowedFileTypes: {  
      type: Array,  
      default: () => ['doc','docx','xls','xlsx'] // 允许的文件类型，可以根据需要修改  
    },  
  maxFileSize: { // 允许的最大文件大小，单位是字节，可以根据需要修改  
    type: Number,  
    default: 10, // MB  
  },  
  maxFileCount: { // 允许的最大文件数量
    type: Number,  
    default: 5,  
  },
})

const beforeUpload = (file, fileList) => {  
  const fileNameArr = file.name.split('.')
  const fileType = fileNameArr[fileNameArr.length - 1] // 获取文件类型  
  const isAllowedFileType = props.allowedFileTypes.includes(fileType);
  if (!isAllowedFileType) {  
    message.error(`${file.name} 请上传.doc,.docx,.xls,.xlsx格式的文件`);
    return false || Upload.LIST_IGNORE; // 如果文件类型不在允许范围内，阻止上传  
  }  
  if (file.size > props.maxFileSize * 1024 *1024) {  
    message.error(`${file.name} 请上传${props.maxFileSize}M以内的文件}`);
    return false || Upload.LIST_IGNORE; // 如果文件大小超过限制，阻止上传  
  }  
  fileList.value = [...(fileList.value || []), file];  
  return false
};

const handleRemove = file => {
  const index = fileList.value.indexOf(file);
  const newFileList = fileList.value.slice();
  newFileList.splice(index, 1);
  fileList.value = newFileList;
};

const sendFileList = () => {
   return fileList.value;
}

defineExpose({
  sendFileList
})

</script>

<style>

</style>