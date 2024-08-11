<template>
  <modal-handle-comp 
    :visible="visible" 
    :title="handleState == 'add' ? '新增节点' : '编辑节点'"
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
        <a-input v-model:value="formState.nodeAddress" placeholder="请输入通信地址" show-count :maxlength="50"/>
      </a-form-item>
      <a-form-item label="数据属性" name="nodeStatus">
        <a-select v-model:value="formState.nodeStatus" placeholder="请选择数据属性">
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
  </div>
  </modal-handle-comp>
</template>

<script setup>
import modalHandleComp from '@/components/modalHandleComp';
import { getFormConfig } from '@/hooks/businessHook'
import { formAdd, formUpdate, getChainList } from '@/api/template/business'
import { onMounted } from 'vue';

const { labelCol, wrapperCol } = getFormConfig()
const formRef = ref(null);
const { proxy } = getCurrentInstance();
const emit = defineEmits(["handleSubmit"])

const formContent = {
  chainId: null,
  chainName: '',
  nodeAddress: '',
  nodeStatus: null,
  monitoring: '',
  certificateExpirationTime: ''
}

const state = reactive({
  handleState: '',
  visible: false,
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
  ]
}

const openModal = (param) => {
  getChainListData()
  state.visible = true;
  state.handleState = param?.type
  state.formState = {...formContent};
  if (param.type == 'edit' && param.data?.id) {
    state.formState = { ...param.data }
  }
} 

const handleOk = () => {
  formRef.value.validate().then((result) => {
    state.confirmLoading = true;
    state.handleState === 'add' ? handleAdd() : handleUpdate()
  }).catch((err) => {
    proxy.$con.log(err)
  });
}

const handleAdd = () => {
  formAdd(state.formState).then(res => {
    handleResultAction()
  }).finally(() => {
    state.confirmLoading = false;
  })
}

const handleUpdate = () => {
  formUpdate(state.formState).then(res => {
    handleResultAction()
  }).finally(() => {
    state.confirmLoading = false;
  })
}

const handleCancel = () => {
  formRef.value.resetFields()
  state.visible = false;
};

const handleResultAction = () => {
  state.confirmLoading = false;
  state.visible = false;
  formRef.value.resetFields()
  proxy.$message.success('操作成功')
  emit("handleSubmit")
}

const getChainListData = () => {
  getChainList().then(res => {
    state.searchChainList = res.data
  })
}

onMounted(() => {

})


defineExpose({
  openModal
})

const { handleState, visible, confirmLoading, formState, searchChainList } = toRefs(state);

</script>

<style>
.modal-form {
  padding: 20px 0;
}
</style>