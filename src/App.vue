<template>
  <a-config-provider 
    hash-priority="high"
    :locale="locale"
    :theme="{
      token: {
        colorPrimary: config.appTheme,
      },
    }"
  >
    <router-view />
  </a-config-provider>
</template>

<script setup>
import {setAntdDefaultLocale, getAntdLocalePackage} from '@/hooks/changeLocale'
import config from '@/basics/config'

let { locale } = setAntdDefaultLocale()
locale = computed(() => {
  const antdLocale = getAntdLocalePackage()
  return antdLocale
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
</style>
