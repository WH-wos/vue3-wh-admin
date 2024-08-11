<template>
  <div class="app-container">
    <!-- s: 搜索组件 -->
    <div class="search-wrapper"> 
      <search-comp @searchSubmit="searchSubmit" :searchChainList="state.searchChainList"></search-comp>
    </div>
     <!-- e: 搜索组件 -->

    <a-divider />

    <div class="table-btn-wrapper">
      <a-space>
        <a-button @click="deriveFile">导出</a-button>
        <a-button type="primary" @click="handleAdd">新增</a-button>
      </a-space>
      <div class="inline-btn ml20">
       <table-config-comp 
        :columns="columnsFilterData"
        @changeTableColumn="changeTableColumn"
        @refreshData="refreshData"
       ></table-config-comp>
      </div>
    </div>
    
    <div class="table-wrapper">
        <!-- s: 表格组件 -->
        <table-comp 
          :columns="columns"
          :dataSource="dataSource"
          :pages="pages"
          :rowSelection="{
            selectedRowKeys: state.selectedTableRows,
            onChange: handleRowChange
          }"
          @changePage="changePage"
          :loading="loading"
        >
          <template #nodeStatus="{record}">
            <a-tag>{{ nodeStateFilter(record.nodeStatus) }}</a-tag>
          </template>
          <template #chainId="{record}">
            <a-tag color="green">{{ getValueByKey(state.searchChainList, 'chainName', record.chainId) }}</a-tag>
          </template>
          <template #certificateExpirationTime="{record}">
            <div>{{ record.certificateExpirationTime[0] }}</div>
            <div>{{ record.certificateExpirationTime[1] }}</div>
          </template>
          <template #operation="{record}" >
            <a @click="handleEdit(record)" >修改</a>
            <a-divider type="vertical" />
            <a @click="handleDelete(record)" >删除</a>
          </template>
        </table-comp>
      <!-- e: 表格组件 -->
    </div>

    <!-- s: 添加/修改弹窗 -->
    <handle-comp 
      ref="HandleCompRef"
      @handleSubmit="handleSubmit"
    >
    </handle-comp>
    <!-- e: 添加/修改弹窗 -->

  </div>
</template>

<script setup>
import searchComp from './searchComp'
import tableComp from '@/components/tableComp'
import handleComp from './handleComp' 
import tableConfigComp from '@/components/tableConfigComp'
import useApi from '@/hooks/useApi'
import useDelConfirm from '@/hooks/useDelConfirm'
import { getTableConfig } from '@/hooks/businessHook'
import { getTableList, tableDelete, getChainList } from '@/api/template/business'
import { nodeStateFilter, getValueByKey } from '@/utils/filter'

const HandleCompRef = ref(null)
// 设置默认分页参数
const { pagesDefault } = getTableConfig()
// 绑定分页参数
const pages = reactive({
 ...pagesDefault
})

const { proxy } = getCurrentInstance();

const { loading, dataSource, fetchResource } = useApi(getTableList);

const state = reactive({
  searchParams: {},
  selectedTableRows: [],
  handleState: 'add',
  searchChainList: []
})

let columns = ref([
  {
    title: '数据名称',
    dataIndex: 'chainName',
  },
  {
    title: '数据ID',
    dataIndex: 'nodeAddress',
  },
  {
    title: '数据属性',
    dataIndex: 'nodeStatus',
  },
  {
    title: '类型选择',
    dataIndex: 'chainId',
  },
  {
    title: '到期时间',
    dataIndex: 'certificateExpirationTime',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 160,
  },
]);

// 初始化表格过滤字段
const columnsFilterData = columns.value

// 点击搜索
const searchSubmit = (searchParams) => {
  proxy.$con.log(searchParams)
  state.searchParams = searchParams
  getTableListData()
}
// 点击分页
const changePage = (param) => {
  pages.page = param.page
  getTableListData()
}
// 点击添加
const handleAdd = () => {
  HandleCompRef.value.openModal({
    type: 'add'
  })
}
// 点击修改
const handleEdit = (record) => {
  HandleCompRef.value.openModal({
    type: 'edit',
    data: record
  })
}
// 点击新增/修改 提交按钮
const handleSubmit = () => {
  state.searchParams.page = 1
  getTableListData()
}

// 点击删除
const handleDelete = (record) => {
  useDelConfirm().showDelConfirm(() => {
    delSubmit(record)
  })
}
// 执行删除
const delSubmit = (record) => {
  tableDelete({id: record.id}).then(res => {
    proxy.$message.success('删除成功！')
    state.searchParams.page = 1
    getTableListData()
  })
}

const deriveFile = () => {
  if (state.selectedTableRows.length === 0) {
    proxy.$message.warn(`请选中列表数据`)
    return false
  }
  proxy.$message.info(`导出 ID为 ${state.selectedTableRows} 的数据`)
}

// 选中/反选 table checkbox
const handleRowChange = (selectedRowKeys) => {
  console.log(selectedRowKeys)
  state.selectedTableRows = selectedRowKeys
}
// 过滤表格字段
const changeTableColumn = (newColumnList) => {
  columns.value = newColumnList
}
const refreshData = () => {
  proxy.$con.info('刷新列表')
  getTableListData()
}

onMounted(() => {
  getTableListData()
});

getChainListData()

// 获取列表数据
function getTableListData () {
  state.searchParams.page = pages.page
  state.searchParams.pageSize = pages.pageSize
  fetchResource(state.searchParams).then()
};

function getChainListData () {
  getChainList().then(res => {
    state.searchChainList = res.data
  })
}

</script>

<style scoped>
</style>
