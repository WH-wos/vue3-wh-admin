import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { viteMockServe } from 'vite-plugin-mock'

import createAutoImport from './auto-import'
// import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue(), DefineOptions(),
        viteMockServe({
            mockPath: './src/mock',
            enable: true,
            prodEnabled: true,
        })
    ]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetupExtend())
        // vitePlugins.push(createSvgIcon(isBuild))
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}