import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerGlobComp } from './hooks/registerGlobComp'
import { registerGlobMethods } from './hooks/registerGlobMethods'

import { setupStore } from '@/store';

import '@/basics/permission/routerEach' // 路由拦截
import '@/assets/css/index.scss' // global css
// import '@/assets/css/iconfont/iconfont.css' //iconfont引入
import 'dayjs/locale/zh-cn';



// 创建应用实例
const app = createApp(App);

// 注册全局组件
registerGlobComp(app)

// 注册全局方法
registerGlobMethods(app)

// 挂载vuex状态管理
setupStore(app)

app.use(router).mount('#app')