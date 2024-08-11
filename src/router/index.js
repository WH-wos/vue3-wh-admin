import { createRouter, createWebHistory } from 'vue-router'

import Error404 from '@/views/common/error/404'
import Error401 from '@/views/common/error/401'

import Layout from '@/layouts'
import Login from '@/views/login.vue'

import Workplace from '@/views/dashboard/workplace/index.vue'
import Analysis from '@/views/dashboard/analysis/index.vue'

import TableList from '@/views/list/tableList/index.vue'
import CardList from '@/views/list/cardList/index.vue'

import BasicForm from '@/views/form/basicForm/index.vue'
import StepForm from '@/views/form/stepForm/index.vue'

import BasicDetail from '@/views/profile/basic'

import ResultSuccess from '@/views/result/success/index.vue'
import ResultError from '@/views/result/error/index.vue'

// 公共路由
export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/common/redirect/index.vue')
        }]
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        hidden: true
    },
    {
        path: "/:pathMatch(.*)*",
        component: Error404,
        hidden: true,
        name: '404'
    },
    {
        path: '/401',
        component: Error401,
        hidden: true,
        name: '401'
    },
    {
        path: '/dashboard',
        component: Layout,
        alwaysShow: true,
        redirect: '/dashboard/workplace',
        meta: { title: '仪表盘', icon: 'AppstoreOutlined' },
        children: [{
                path: 'workplace',
                component: Workplace,
                name: 'Workplace',
                meta: { title: '工作台' }
            },
            {
                path: 'analysis',
                component: Analysis,
                name: 'Analysis',
                meta: { title: '数据统计页' }
            }
        ]
    },
    {
        path: '/list',
        component: Layout,
        alwaysShow: true,
        redirect: '/list/tableList',
        meta: { title: '列表页', icon: 'UnorderedListOutlined' },
        children: [{
                path: 'tableList',
                name: 'TableList',
                component: TableList,
                meta: { title: '查询表格' }
            },
            {
                path: 'cardList',
                name: 'CardList',
                component: CardList,
                meta: { title: '卡片表格' }
            }
        ]
    },
    {
        path: '/form',
        component: Layout,
        alwaysShow: true,
        redirect: '/form/basicForm',
        meta: { title: '表单页', icon: 'FormOutlined' },
        children: [{
                path: 'basicForm',
                name: 'BasicForm',
                component: BasicForm,
                meta: { title: '基础表单' }
            },
            {
                path: 'stepForm',
                name: 'StepForm',
                component: StepForm,
                meta: { title: '分步表单' }
            }
        ]
    },
    {
        path: '/profile',
        component: Layout,
        alwaysShow: true,
        redirect: '/profile/basicProfile',
        meta: { title: '详情页', icon: 'FileTextOutlined' },
        children: [{
            path: 'basicProfile',
            name: 'BasicProfile',
            component: BasicDetail,
            meta: { title: '基础详情页' }
        }]
    },
    {
        path: '/result',
        component: Layout,
        alwaysShow: true,
        redirect: '/result/success',
        meta: { title: '结果页', icon: 'CheckCircleOutlined' },
        children: [{
                path: 'success',
                name: 'success',
                component: ResultSuccess,
                meta: { title: '成功页' }
            },
            {
                path: 'error',
                name: 'error',
                component: ResultError,
                meta: { title: '失败页' }
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard/workplace',
        children: [{
            path: "https://www.antdv.com/",
            meta: { title: '外链', icon: 'CompassOutlined' },
        }]
    },

]

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = []

let routerObj = createRouter({
    history: createWebHistory(),
    fallback: false,
    routes: constantRoutes,
    scrollBehavior: to => {
        if (to.hash) {
            return { el: to.hash, top: 80, behavior: 'auto' };
        }
    },
})



export default routerObj;