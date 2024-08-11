export let miniLineOption = {
    color: ['#81bdff'],
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        // grid 区域是否包含坐标轴的刻度标签
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [],
        show: true
    }],
    yAxis: [{
        show: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.8,
            color: '#81bdff',
        },
        emphasis: {
            focus: 'series'
        },
        data: []
    }, ]
};

export const getMiniLineOptions = (params = {}) => {
    if (params.color) {
        miniLineOption.color = params.color;
        miniLineOption.series[0].areaStyle.color = params.color;
    }
    if (params.xdata) {
        miniLineOption.xAxis.data = params.xdata;
    }
    if (params.data) {
        miniLineOption.series[0].data = params.data;
    }
    return miniLineOption;
};