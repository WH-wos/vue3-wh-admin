<template>
  <a-layout-content class="layout-content">
    <breadcrumbComp id="breadcrumb-container" class="breadcrumb-container" />
    <div class="layout-content-main">
      <router-view />
    </div>
  </a-layout-content>
</template>

<script setup>
import breadcrumbComp from "./breadcrumbComp";

</script>

<style lang="scss" scoped>
.layout-content{
  padding: $base-theme-content-padding;
}
.layout-content-main{
  min-height: 360px;
  width: 100%;
  float: left; 
}
.breadcrumb-container{
  margin: 10px 0 10px 10px;
}
</style>

