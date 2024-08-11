<template>
  <div>
      <a-form
        ref="formRef"
        :layout="layout"
        :label-col="labelCol"
        :model="formState"
        @finish="searchSubmit"
      >
        <a-form-item has-feedback label="数据名称" name="chainName">
          <a-input v-model:value="formState.chainName" placeholder="请输入节点名称" />
        </a-form-item>
        <a-form-item has-feedback label="数据ID" name="nodeAddress">
          <a-input v-model:value="formState.nodeAddress" placeholder="请输入节点ID"/>
        </a-form-item>
        <a-form-item has-feedback label="类型选择" name="chainId">
          <a-select v-model:value="formState.chainId" placeholder="请选择" :style="formContentStyle">
            <a-select-option :value="item.id" :key="item.id" v-for="item in searchChainList">{{ item.chainName }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="到期时间" name="certificateExpirationTime">
          <a-date-picker
            v-model:value="formState.certificateExpirationTime"
            placeholder="请选择到期时间"
            style="width: 100%"
            :style="formContentStyle"
            :allowClear="true"
            valueFormat="YYYY-MM-DD"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
          <a-button class="mr10" type="primary" html-type="submit">查询</a-button>
          <a-button v-debounce-click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from 'vue';
import { getSearchFormConfig } from '@/hooks/businessHook'

const {labelCol, formContentStyle, layout} = getSearchFormConfig();
const formRef = ref(null);
const emit = defineEmits(["searchSubmit"])


const props = defineProps({
  searchChainList: {
    type: Array,
    default: () => {
      return [];
    }
  },
})

const formState = reactive({
  chainName: '',
  nodeAddress: '',
  chainId: null,
  certificateExpirationTime: null
});
const searchSubmit = values => {
  emit('searchSubmit', values);
};
const resetForm = () => {
  formRef.value.resetFields();
  emit('searchSubmit', formState);
}

</script>

<style scoped>

</style>
