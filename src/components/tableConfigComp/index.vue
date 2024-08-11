<template>
  <a-space :size="12">
    <RedoOutlined :style="iconStyle" @click="refreshData"/>
    <a-popover trigger="click" placement="bottomRight">
      <template #title>
        <div class="mt-5 clearfix">
          <div class="fl">列表字段</div>
          <div class="fr">
            <a-button type="link" size="small" @click="resetFilter" block>重置</a-button>
          </div>  
        </div>
      </template>
      <template #content>
        <div class="th-filter-content">
          <a-checkbox
            v-model:checked="state.checkAll"
            :indeterminate="state.indeterminate"
            @change="onCheckAllChange"
            class="th-filter-check-all"
          >
            全选/反选
          </a-checkbox>
        
          <a-checkbox-group v-model:value="state.checkedList" style="width: 100%">
              <a-checkbox :key="item.dataIndex" :value="item.dataIndex" v-for="item in props.columns">{{ item.title }}</a-checkbox>
          </a-checkbox-group>
        </div>
      </template>
      <SettingOutlined :style="iconStyle" />
    </a-popover>
  </a-space>
</template>

<script setup>
/*
* 表格工具组件
* @param {Array} columns 表格列配置
* @event {refreshData} 刷新数据
* @event {changeTableColumn} 改变表格列
*/


const emit = defineEmits(["refreshData", "changeTableColumn"])
const iconStyle = {fontSize: '18px', cursor: 'pointer'}

const props = defineProps({
    columns: {
      type: Array,
      default: () => []
    }
})
const state = reactive({
  checkAll: true,
  checkedList: [],
  filterKey: []
});


const onCheckAllChange = (e) => {
  Object.assign(state, {
    checkedList: e.target.checked ?  state.filterKey : [],
    indeterminate: false,
  });
};

const filterColumns = () => {
  state.filterKey = []
  for (let i =0; i < props.columns.length; i++) {
    state.filterKey.push(props.columns[i].dataIndex)
  }
  state.checkedList = state.filterKey
}

filterColumns()

const resetFilter = () => {
  filterColumns()
}

const refreshData = () => {
  emit("refreshData")
}
const changeTableColumn = () => {
  const filteredColumns = props.columns.filter(item => state.checkedList.includes(item.dataIndex));
  emit("changeTableColumn", filteredColumns)
}

watch(
  () => state.checkedList,
  val => {
    state.indeterminate = !!val.length && val.length < state.filterKey.length;
    state.checkAll = val.length ===  state.filterKey.length;
    changeTableColumn()
  },
);

</script>

<style lang="scss" scoped>
.th-filter-content {
  width: 260px;
  .th-filter-check-all{
    margin-bottom: 10px!important;
    padding-left: 0px!important;
  }
  .ant-checkbox-wrapper{
    width: 100%;
    margin-bottom: 5px;
    padding-left: 25px;
  }
}


</style>