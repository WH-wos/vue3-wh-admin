<template>
  <a-layout-header class="layout-header">
    <div class="header-content clearfix">

      <div class="header-right">
        <a-dropdown placement="bottomRight">
          <div class="lang-icon">
              <GlobalOutlined :style="{fontSize: '18px', color: '#999'}"/>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="changeLocale(LONG.chinese)">
                🇨🇳 简体中文
              </a-menu-item>
              <a-menu-item @click="changeLocale(LONG.english)">
                🇺🇸 English
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>

      <div class="header-right mr25">
        <a-dropdown placement="bottomRight">
          <div class="user-info">
            <a-avatar class="user-avatar mr5" :size="24" :style="{backgroundColor: variables.baseTheme}">
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <span class="user-name">W.H</span>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item >
                <UserOutlined />
                个人中心
              </a-menu-item>
              <a-menu-item @click="logout()">
                <LoginOutlined />
                退出
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      
    </div>
  </a-layout-header>
</template>

<script setup>
import variables from '@/assets/css/variables.module.scss'
import { LONG } from '@/basics/enums/lang';
import useAppStore from '@/store/modules/app';
import { removeToken } from '@/utils/storage'

const appStore = useAppStore()
const router = useRouter()

function changeLocale(locale) {
  appStore.setLocale(locale)
}

function logout(){
  removeToken()
  router.push('/login')
}

</script>

<style lang="scss" scoped>
.layout-header{
  background-color: $base-theme-content-bg;
  padding: 0
}
.header-content{
  width: 100%;
  padding: $base-theme-content-padding;
}
.header-right {
 float: right;
 .lang-icon{
    margin-top: 2px;
 }
}

</style>