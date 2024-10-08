import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/tool"

// 查询用户列表
export function listUser(query) {
    return request({
        url: '/system/user/list',
        method: 'get',
        params: query
    })
}

// 查询用户详细
export function getUser(userId) {
    return request({
        url: '/system/user/' + parseStrEmpty(userId),
        method: 'get'
    })
}

// 新增用户
export function addUser(data) {
    return request({
        url: '/system/user',
        method: 'post',
        data: data
    })
}

// 修改用户
export function updateUser(data) {
    return request({
        url: '/system/user',
        method: 'post',
        data: data
    })
}

// 删除用户
export function delUser(data) {
    return request({
        url: '/del/user/',
        method: 'post',
        data: data
    })
}

// 用户状态修改
export function changeUserStatus(data) {
    return request({
        url: '/system/user/changeStatus',
        method: 'post',
        data: data
    })
}