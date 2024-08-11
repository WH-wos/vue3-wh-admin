export let pirOption = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom',
        left: 'center'
    },
    series: [{
        name: '提示',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: []
    }]
};

export const getPieOption = (params = {}) => {
    if (params.data) {
        pirOption.series[0].data = params.data;
    }
    return pirOption;
};