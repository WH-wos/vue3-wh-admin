<!-- ECharts.vue -->

<template>
  <div ref="chartRef" style="width: 100%; height: 100%;"></div>
</template>

<script setup>

import { defineProps, onMounted, onBeforeUnmount, watch, ref } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  option: {
    type: Object,
    default: () => {}
  }
})

let chartRef = ref(null);
let chart = null;

onMounted(() => {
  initChart();
  setOption();
  window.addEventListener('resize', handleResize);
});

watch(() => props.option, () => setOption(), { deep: true });

const initChart = () => {
  chart = echarts.init(chartRef.value);
};

const setOption = () => {
  if (chart) {
    chart.setOption(props.option);
  }
};

const handleResize = () => {
  if (chart) {
    chart.resize();
  }
};

onBeforeUnmount(() => {
  if (chart) {
    chart.dispose();
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

</style>
