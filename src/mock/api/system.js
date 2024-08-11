// 登陆
export const loginData = {
    accessToken: '78df798a707gf6745fdsa76f'
}

// 获取链上统计数据
export const systemInfoData = {
    chain: {
        accountTotal: 599,
        superTotal: 8,
        subchainTotal: 2333
    },
    transaction: {
        total: 89384,
        dayTotal: 293,
        monthTotal: 1093,
    },
    block: {
        height: 90193,
        pendingTransaction: 12
    }
}

// 详情
export const blockInfoData = {
    blockNumber: 1,
    blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    blockTime: '2021-01-01 00:00:00',
    blockTxCount: 10,
    address: '7fyd89a7XYLzsU4t2rnRrsK2zfU'
}

// 列表
export const contractList = [{
        contractName: '卡片标题一',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
    {
        contractName: '卡片标题二',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
    {
        contractName: '卡片标题三',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
    {
        contractName: '卡片标题四',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
    {
        contractName: '卡片标题五',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
    {
        contractName: '卡片标题六',
        contractDoc: '卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述卡片描述'
    },
]

// 交易数比率
export const transactionRateData = {
    total: 89384,
    week: {
        status: 0,
        rate: '60%'
    },
    day: {
        status: 1,
        rate: '10%',
        total: '1000'
    }
}

export const transactionChartData = {
    total: 89384,
    date: ['1月', '2月', '3月', '4月', '5月', '6月'],
    data: [140, 232, 101, 264, 90, 340]
}

export const blockRankingData = [
    { name: '上海', value: '32.51%' },
    { name: '重庆', value: '18.12%' },
    { name: '深圳', value: '4.09%' },
    { name: '厦门', value: '3.98%' },
    { name: '杭州', value: '3.30%' },
    { name: '北京', value: '3.08%' },
    { name: '天津', value: '3.08%' },
]

export function nodeListData() {
    let dataSource = []
    for (let i = 0; i < 10; i++) {
        dataSource.push({
            key: '1',
            id: '1',
            chainName: '数据名称' + (i + 1),
            nodeAddress: 'a001206af56800',
            nodeStatus: i % 2 === 0 ? '1' : '2'
        })
    }
    return dataSource
}

export const blockPieData = [
    { value: 1048, name: '1月' },
    { value: 735, name: '2月' },
    { value: 580, name: '3月' },
    { value: 484, name: '4月' },
    { value: 300, name: '5月' }
]

export const nodeDetailData = {
    nodeName: '数据一',
    bid: '53Y9bkJeH1PwWK9xrjtSezwhDpgV1',
    nodeConsensusIp: '192.168.1.1',
    monitoring: true,
    blockchain: '源数据'
}

export const certificateDetailData = {
    type: '证书类型一',
    startTime: '2022-07-01 00:00:00',
    endTime: '2023-07-01 00:00:00',
    timeOut: 128,
}

export const serverInfoData = {
    type: '应用程序服务器',
    publicIp: '10.11.2.10',
    intranetIp: '192.168.1.1',
    operatingSystem: 'windows',
    startTime: '2022-07-01 00:00:00',
    endTime: '2023-07-01 00:00:00',
    state: 1
}