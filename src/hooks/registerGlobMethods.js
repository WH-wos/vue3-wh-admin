import i18n from "@/basics/locales";
import plugins from '@/plugins'
import debounceClick from '@/directive/debounceClick'
export function registerGlobMethods(app) {
    registerI18n(app)
    registerPlugins(app)
    registerDirective(app)
}

function registerPlugins(app) {
    app.use(plugins)
}

function registerDirective(app) {
    app.directive('debounce-click', debounceClick);
}

function registerI18n(app) {
    app.use(i18n)
    app.config.globalProperties.$t = function(key, options) {
        return i18n.t(key, options)
    }
}