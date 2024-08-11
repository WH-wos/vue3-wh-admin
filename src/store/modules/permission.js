import router, { constantRoutes } from '@/router'
import { defineStore } from 'pinia'

const usePermissionStore = defineStore(
    'permission', {
        state: () => ({
            routes: [],
            sidebarRouters: []
        }),
        actions: {
            setDefaultSidebarRouters() {
                this.sidebarRouters = constantRoutes
            },
        }
    }
)

export default usePermissionStore