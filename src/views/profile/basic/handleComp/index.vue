<template>
  <modal-handle-comp 
    :visible="visible" 
    title="编辑"
    :confirmLoading="confirmLoading"
    @handleOk="handleOk"
    @handleCancel="handleCancel" 
  >

  <div class="modal-form">
    <a-form
      name="form_in_modal"
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item label="数据引用限制" name="seq">
        <a-input v-model:value="formState.seq" placeholder="请输入数据引用限制数" show-count :maxlength="50"/>
      </a-form-item>

      <a-form-item label="数据类型" name="chainId">
        <a-select v-model:value="formState.chainId" placeholder="请选择数据类型">
          <a-select-option :value="item.id" :key="item.id" v-for="item in searchChainList">{{ item.chainName }}</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item name="nodeAddress">
        <template #label>
          <span class="mr5">ID</span>
          <a-tooltip title="描述" placement="topLeft">
            <InfoCircleOutlined />
          </a-tooltip>
        </template>
        <a-input v-model:value="formState.nodeAddress" placeholder="请输入ID" show-count :maxlength="50"/>
      </a-form-item>

      <a-form-item label="属性" name="nodeStatus">
        <a-radio-group v-model:value="formState.nodeStatus" name="radioGroup">
          <a-radio value="1">属性一</a-radio>
          <a-radio value="2">属性二</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="是否可运行" name="monitoring">
        <a-switch v-model:checked="formState.monitoring" :unCheckedValue="0" :checkedValue="1" />
      </a-form-item>

      <a-form-item label="证书到期时间" name="certificateExpirationTime">
        <a-range-picker 
          v-model:value="formState.certificateExpirationTime" 
          value-format="YYYY-MM-DD"   
          style="width: 100%"
        />
      </a-form-item>
    </a-form>
  </div>
  </modal-handle-comp>
</template>

<script setup>
import modalHandleComp from '@/components/modalHandleComp';
import { getFormConfig } from '@/hooks/businessHook'
import { getDetail, getChainList, updateBlock } from '@/api/template/business'

const { labelCol, wrapperCol } = getFormConfig()
const formRef = ref(null);
const { proxy } = getCurrentInstance();
const emit = defineEmits(["handleSubmit"])

const formContent = {
  seq: null,
  chainId: '',
  nodeAddress: '',
  nodeStatus: null,
  monitoring: '',
  certificateExpirationTime: ''
}

const state = reactive({
  visible: false,
  confirmLoading: false,
  formState: formContent,
  searchChainList: []
});

const rules = {
  seq: [{ required: true, message: '请输入数据引用限制', trigger: 'blur'}],
  chainId: [{ required: true, message: '请选择数据类型', trigger: 'change'}],
  nodeStatus: [{ required: true, message: '请选择属性', trigger: 'change'}]
}

const openModal = () => {
  state.visible = true;
  state.formState = {...formContent};
  getBlockDetail()
  
} 

const handleOk = () => {
  formRef.value.validate().then((result) => {
    state.confirmLoading = true;
    //编辑接口
    handleUpdate()
  }).catch((err) => {
    proxy.$con.log(err)
  });
}

const handleUpdate = () => {

  updateBlock().then(res => {
    handleResultAction()
  }).finally(() => {
    state.confirmLoading = false
  })

}

const getBlockDetail = () => {

  getDetail().then(res => {
    formContent.seq = res.data.seq
    formContent.chainId = res.data.chainId
    formContent.nodeAddress = res.data.nodeAddress
    formContent.nodeStatus = res.data.nodeStatus
    formContent.monitoring = res.data.monitoring
    formContent.certificateExpirationTime = res.data.certificateExpirationTime
    state.formState = {...formContent}
  })
}

const handleCancel = () => {
  formRef.value.resetFields()
  state.visible = false
  state.confirmLoading = false
};

const handleResultAction = () => {
  state.confirmLoading = false;
  state.visible = false;
  formRef.value.resetFields()
  proxy.$message.success('操作成功')
  emit("handleSubmit")
}

getChainListData()

function getChainListData () {
  getChainList().then(res => {
    state.searchChainList = res.data
  })
}

defineExpose({
  openModal
})

const { visible, confirmLoading, formState, searchChainList } = toRefs(state);

</script>

<style>
.modal-form {
  padding: 20px 0;
}
</style>