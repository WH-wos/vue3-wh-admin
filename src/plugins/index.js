import con from "./console";
export default function installPlugins(app) {
    // log方法
    app.config.globalProperties.$con = con
}