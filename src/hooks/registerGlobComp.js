import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as Icons from "@ant-design/icons-vue";

export function registerGlobComp(app) {
    registerAntdUI(app)
    registerAntIcons(app)
}
// 注册 antdUI
const registerAntdUI = (app) => {
        app.use(Antd)
    }
    // 注册 antd icon
const registerAntIcons = (app) => {
    for (const i in Icons) {
        app.component(i, Icons[i])
    }
    // global reference: <component :is="$antIcons['ToolOutlined']" />
    app.config.globalProperties.$antIcons = Icons
}