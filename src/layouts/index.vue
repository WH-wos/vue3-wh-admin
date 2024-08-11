<template>
    <a-layout class="layout">
      <siderComp></siderComp>
      <a-layout>
        <headerComp></headerComp>
        <mainComp></mainComp>
      </a-layout>
    </a-layout>
</template>
  
  <script>
  import headerComp from './components/headerComp'
  import siderComp from './components/sidebarComp'
  import mainComp from './components/appMainComp'
  
  export default {
      name: 'layoutComp',
      components: {
        headerComp,
        siderComp,
        mainComp
      }
  }
  </script>
  
  <style lang="scss" scoped>
    .layout{
      min-height: 100vh
    }
  </style>
  
  