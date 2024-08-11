import request from '@/utils/request'
export function getTableList(params) {
    return request({
        url: '/table/list',
        method: 'get',
        params: params
    })
}
export function formAdd(data) {
    return request({
        url: '/form/add',
        method: 'post',
        data: data
    })
}

export function formUpdate(data) {
    return request({
        url: '/form/update',
        method: 'post',
        data: data
    })
}

export function tableDelete(data) {
    return request({
        url: '/table/delete',
        method: 'post',
        data: data
    })
}

export function getChainList() {
    return request({
        url: '/chain/list',
        method: 'post',
        data: {}
    })
}

export function uploadFiles(files) {
    return request({
        url: '/upload/file',
        method: 'post',
        data: files,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function getDetail() {
    return request({
        url: '/block/detail',
        method: 'get'
    })
}

export function updateBlock(data) {
    return request({
        url: '/block/update',
        method: 'post',
        data: data
    })
}