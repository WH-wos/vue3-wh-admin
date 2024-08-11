import { ref } from 'vue'
import { LONG } from '@/basics/enums/lang'
import i18n from '@/basics/locales'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';

/**
 * 设置默认的 Ant Design 组件语言。
 * @returns {Object} 返回一个包含 locale 属性的对象。
 */
export function setAntdDefaultLocale() {
    let locale = ref()
    locale.value = getAntdLocalePackage()
    return { locale }
}

/**
 * 获取Antd的本地化包
 * @returns {Object} 返回 locale 语言包。
 */
export function getAntdLocalePackage() {
    const locale = i18n.global.locale;
    switch (locale) {
        case LONG.chinese:
            return zhCN;
        case LONG.english:
            return enUS;
        default:
            return zhCN;
    }
}