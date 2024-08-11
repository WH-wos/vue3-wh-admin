<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="header-logo">Logo</div>
    <a-menu 
      v-model:selectedKeys="selectedKeys" 
      v-model:openKeys="openKeys"
      :theme="config.sideTheme" 
      mode="inline"
    >
    <sidebarItem 
      v-for="(route, index) in sidebarRouters"
      :key="route.path + index"
      :item="route"
      :base-path="route.path"
      />
    </a-menu>
  </a-layout-sider>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import config from '@/basics/config'
import usePermissionStore from '@/store/modules/permission'
import sidebarItem from './sidebarItem'

// 获取路由数据
const permissionStore = usePermissionStore()
const sidebarRouters =  permissionStore.sidebarRouters

const route = useRoute()

const collapsed = ref(false);
// 菜单选中的key
const selectedKeys = ref([])
// 默认打开的菜单
const openKeys = ref([]);

// 监听路由变化
watch(
  () => route.path,
  (path) => {
    selectedKeys.value = path.indexOf('/') > -1 ? [path] : [path.substr(1, path.length)]
    openKeys.value = path.indexOf('/', 1) > -1 ? [path.substr(0, path.indexOf('/', 1))] : []
  },
  { immediate: true }
)
</script>

<style>
.header-logo {
  height: 32px;
  line-height: 32px;
  color: #FFF;
  margin: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  /*background: url('@/assets/images/');*/
}
</style>