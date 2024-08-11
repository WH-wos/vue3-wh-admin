export let barOption = {
    grid: {
        left: '50',
        right: '50',
        bottom: '30',
        top: '30',
        // grid 区域是否包含坐标轴的刻度标签

    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        barWidth: '40',
        data: [],
        type: 'bar'
    }]
};

export const getBarOption = (params = {}) => {
    if (params.color) {
        barOption.color = params.color;
    }
    if (params.xdata) {
        barOption.xAxis.data = params.xdata;
    }
    if (params.data) {
        barOption.series[0].data = params.data;
    }
    if (params.barWidth) {
        barOption.series[0].barWidth = params.barWidth;
    }
    return barOption;
};