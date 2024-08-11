import { createI18n } from 'vue-i18n'
import message from './lang'
import { LONG } from '../enums/lang'

// 获取浏览器语言
// let lan = (navigator.browserLanguage || navigator.language).toLowerCase()
let lan = 'zh'
let defLang = LONG.chinese
if (lan.indexOf('zh') > -1) {
    defLang = LONG.chinese
} else if (lan.indexOf('en') > -1) {
    defLang = LONG.english
}

const localeData = {
    legacy: true,
    locale: defLang,
    messages: message,
}

const i18n = createI18n(localeData);

export default i18n;