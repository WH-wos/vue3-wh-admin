import request from '@/utils/request'
export function getSystemInfo() {
    return request({
        url: '/system/detail',
        method: 'get',
        headers: { repeatSubmit: true } //防重复调用开关
    })
}

export function getBlockList() {
    return request({
        url: '/system/block/list',
        method: 'get',
    })
}

export function getContractList() {
    return request({
        url: '/system/contract/list',
        method: 'get',
    })
}

export function getTransactionRate() {
    return request({
        url: '/system/transaction/rate',
        method: 'get',
    })
}

export function getTransactionChart() {
    return request({
        url: '/system/transaction/chart',
        method: 'get',
    })
}
export function getBlockRanking() {
    return request({
        url: '/system/block/ranking',
        method: 'get',
    })
}

export function getNodeList(params) {
    return request({
        url: '/system/node/list',
        method: 'get',
        params: params
    })
}
export function getBlockPieRate() {
    return request({
        url: '/system/blockPie/rate',
        method: 'get',
    })
}

export function getNodeDetail() {
    return request({
        url: '/system/node/detail',
        method: 'get',
    })
}

export function getCertificateDetail() {
    return request({
        url: '/system/certificate/detail',
        method: 'get',
    })
}

export function getServerInfo() {
    return request({
        url: '/system/server/detail',
        method: 'get',
    })
}