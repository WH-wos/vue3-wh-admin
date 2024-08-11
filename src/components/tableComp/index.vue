<template>
  <!-- 表格组件 -->
  <div>
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      class="table-new-style"
      :pagination="false"
      :row-selection="rowSelection"
      :loading="loading"
      :border="border"
      :size="size"
    >
    <template #bodyCell="scope">
      <slot :name="scope.column.dataIndex" :scope="scope" v-bind="scope || {}"></slot>
    </template>
    </a-table>
    <div class="table-pagination">
       <a-pagination  :size="size" @change="changePage" v-model:current="pages.page" :total="pages.total" :pageSize="pages.pageSize" />
    </div>  
  </div>
</template>

<script setup>
const emit = defineEmits(["changePage"])

/*
* 表格组件
* @params {Object} pages 分页参数
* @params {Array} dataSource 数据源
* @params {Array} columns 表格列
* @params {Object} rowSelection 行选择
* @params {Boolean} loading 加载状态
* @params {Boolean} border 是否显示边框
*
*
* @event changePage 分页事件
*
*/
const props = defineProps({
  pages: {
    type: Object,
    default: () => {
      return {
        page: 1,
        pageSize: 10,
        total: 0,
      };
    },
  },
  dataSource: {
    type: Array,
    default: () => {
      return [];
    },
  },
  columns: {
    type: Array,
    default: () => {
      return [];
    },
  },
  rowSelection: {
    type: Object,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
  },
})

const changePage = () => {
  emit('changePage', props.pages);
}

</script>

<style lang="scss" scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
