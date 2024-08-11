import { defineStore } from 'pinia'
import i18n from '@/basics/locales'

const useAppStore = defineStore(
    'app', {
        state: () => ({
            locale: ''
        }),
        getters: {
            getLocale() {
                return this.locale
            }
        },
        actions: {
            setLocale(e) {
                this.locale = e
                const globalI18n = i18n.global
                globalI18n.locale = e
            },
        }
    }
)

export default useAppStore