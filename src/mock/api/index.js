import { formatCallBackData, proxyTag } from './format'
import {
    loginData,
    systemInfoData,
    blockInfoData,
    contractList,
    transactionRateData,
    transactionChartData,
    blockRankingData,
    nodeListData,
    blockPieData,
    nodeDetailData,
    certificateDetailData,
    serverInfoData
} from './system'

import { tableData, chainListData, filesData, blockDetailData } from './business'

// 用户模块
const userMock = [{
    url: `${proxyTag}/user/login`,
    method: 'post',
    response: () => {
        return formatCallBackData(loginData, 200)
    }
}]

// 系统模块
const systemMock = [{
        url: `${proxyTag}/system/detail`,
        method: 'get',
        response: () => {
            return formatCallBackData(systemInfoData, 200)
        }
    },
    {
        url: `${proxyTag}/system/block/list`,
        method: 'get',
        response: () => {
            const list = [blockInfoData, blockInfoData, blockInfoData]
            return formatCallBackData(list, 200)
        }
    },
    {
        url: `${proxyTag}/system/contract/list`,
        method: 'get',
        response: () => {
            return formatCallBackData(contractList, 200)
        }
    },
    {
        url: `${proxyTag}/system/transaction/rate`,
        method: 'get',
        response: () => {
            return formatCallBackData(transactionRateData, 200)
        }
    },
    {
        url: `${proxyTag}/system/transaction/chart`,
        method: 'get',
        response: () => {
            return formatCallBackData(transactionChartData, 200)
        }
    },
    {
        url: `${proxyTag}/system/block/ranking`,
        method: 'get',
        response: () => {
            return formatCallBackData(blockRankingData, 200)
        }
    },
    {
        url: `${proxyTag}/system/node/list`,
        method: 'get',
        response: () => {
            return formatCallBackData(nodeListData(), 200)
        }
    },
    {
        url: `${proxyTag}/system/blockPie/rate`,
        method: 'get',
        response: () => {
            return formatCallBackData(blockPieData, 200)
        }
    },
]

// 列表数据
export const businessMock = [{
        url: `${proxyTag}/table/list`,
        method: 'get',
        response: () => {
            return formatCallBackData(tableData, 200)
        }
    }, {
        url: `${proxyTag}/form/add`,
        method: 'post',
        response: () => {
            return formatCallBackData(null, 200)
        }
    }, {
        url: `${proxyTag}/form/update`,
        method: 'post',
        response: () => {
            return formatCallBackData(null, 200)
        }
    }, {
        url: `${proxyTag}/table/delete`,
        method: 'post',
        response: () => {
            return formatCallBackData(null, 200)
        }
    },
    {
        url: `${proxyTag}/chain/list`,
        method: 'post',
        response: () => {
            return formatCallBackData(chainListData, 200)
        }
    },
    {
        url: `${proxyTag}/upload/file`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        response: () => {
            return formatCallBackData(filesData, 200)
        }
    },
    {
        url: `${proxyTag}/system/node/detail`,
        method: 'get',
        response: () => {
            return formatCallBackData(nodeDetailData, 200)
        }
    },
    {
        url: `${proxyTag}/system/certificate/detail`,
        method: 'get',
        response: () => {
            return formatCallBackData(certificateDetailData, 200)
        }
    },
    {
        url: `${proxyTag}/system/server/detail`,
        method: 'get',
        response: () => {
            return formatCallBackData(serverInfoData, 200)
        }
    },
    {
        url: `${proxyTag}/block/detail`,
        method: 'get',
        response: () => {
            return formatCallBackData(blockDetailData, 200)
        }
    }, {
        url: `${proxyTag}/block/update`,
        method: 'post',
        response: () => {
            return formatCallBackData(null, 200)
        }
    }
]


export default [...userMock, ...systemMock, ...businessMock]