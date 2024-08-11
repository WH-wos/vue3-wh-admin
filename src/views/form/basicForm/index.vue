<template>
  <div class="app-container">
    <div class="basic-form-layer">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="类型选择" name="chainId">
          <a-select v-model:value="formState.chainId" placeholder="请选择">
            <a-select-option :value="item.id" :key="item.id" v-for="item in searchChainList">{{ item.chainName }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="数据名称" name="chainName">
          <a-input v-model:value="formState.chainName" placeholder="请输入数据名称" show-count :maxlength="50"/>
        </a-form-item>
        <a-form-item name="nodeAddress">
          <template #label>
            <span class="mr5">数据ID</span>
            <a-tooltip title="描述" placement="topLeft">
              <InfoCircleOutlined />
            </a-tooltip>
          </template>
          <a-input v-model:value="formState.nodeAddress" placeholder="请输入数据ID" show-count :maxlength="50"/>
        </a-form-item>
        <a-form-item label="数据属性" name="nodeStatus">
          <a-select v-model:value="formState.nodeStatus" placeholder="请选择">
            <a-select-option value="1">属性一</a-select-option>
            <a-select-option value="2">属性二</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="是否运行" name="monitoring">
          <a-switch v-model:checked="formState.monitoring" :unCheckedValue="0" :checkedValue="1" />
        </a-form-item>
        <a-form-item label="到期时间" name="certificateExpirationTime">
          <a-range-picker 
            v-model:value="formState.certificateExpirationTime" 
            value-format="YYYY-MM-DD"   
            style="width: 100%"
          />
        </a-form-item>
      </a-form>

      <a-space class="fr">
        <a-button v-debounce-click="resetForm">重置</a-button>
        <a-button type="primary" v-debounce-click="handleOk" :loading="confirmLoading">确定</a-button>
      </a-space>
    </div>
  </div>
</template>

<script setup>

import { getFormConfig } from '@/hooks/businessHook';
import { formAdd, getChainList } from '@/api/template/business'

const { labelCol, wrapperCol } = getFormConfig()
const formRef = ref(null);
const { proxy } = getCurrentInstance();

const formContent = {
  chainId: null,
  chainName: '',
  nodeAddress: '',
  nodeStatus: null,
  monitoring: '',
  certificateExpirationTime: ''
}

const state = reactive({
  confirmLoading: false,
  formState: formContent,
  searchChainList: []
});

const rules = {
  chainId: [
    {
      required: true,
      message: '请选择类型',
      trigger: 'change'
    },
  ],
  chainName: [
    {
      required: true,
      message: '请输入数据名称',
      trigger: 'blur'
    },
  ],
  certificateExpirationTime: [
    {
      required: true,
      message: '请选择证书到期时间',
      trigger: 'change'
    },
  ]
}

const handleOk = () => {
  formRef.value.validate().then((result) => {
      state.confirmLoading = true;
      handleAdd()
  })
};

const handleAdd = () => {
  formAdd(state.formState).then(res => {
    state.confirmLoading = false;
    proxy.$message.success('操作成功')
  }).finally(() => {
    state.confirmLoading = false;
  })
}

getChainListData()

function getChainListData () {
  getChainList().then(res => {
    state.searchChainList = res.data
  })
}

const resetForm = () => {
  formRef.value.resetFields();
}

const { confirmLoading, formState, searchChainList } = toRefs(state);

</script>

<style scoped>
.basic-form-layer{
  width: 60%;
  margin: 40px auto;
}
</style>