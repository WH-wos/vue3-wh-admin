<template>
  <div class="">
    <a-row :gutter="15">
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '15px' }">
        <chart-card-comp
          title="总交易数"
          :total="state.tranRate.total"
        >
        <div class="chart-box">
          <trend-comp
            label="周同比"
            :percent="state.tranRate.week.rate"
            :icon="state.tranRate.week.status === 0 ? CaretUpOutlined : CaretDownOutlined"
            className="mt5"
          ></trend-comp>
          <trend-comp
            label="日同比"
            :percent="state.tranRate.day.rate"
            :icon="state.tranRate.day.status === 0 ? CaretUpOutlined : CaretDownOutlined"
            className="mt5"
        ></trend-comp>
        </div>
        <template #footer>当日交易数：<span>{{ state.tranRate.day.total }}</span></template>
        </chart-card-comp>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '15px' }">
        <chart-card-comp
          title="总交易数"
          total="199,443"
        >
        <div class="chart-box">
          <echarts-comp
            :option="state.miniLineOption"
          ></echarts-comp>
        </div>
        <template #footer>当日交易数：<span> {{ state.tranRate.day.total }}</span></template>
        </chart-card-comp>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '15px' }">
        <chart-card-comp
          title="总交易数"
          total="199,443"
        >
        <div class="chart-box">
          <echarts-comp
            :option="state.miniBarOptions"
          ></echarts-comp>
        </div>
        <template #footer>当日交易数：<span> {{ state.tranRate.day.total }}</span></template>
        </chart-card-comp>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '15px' }">
        <chart-card-comp
          title="接入进度"
          total="60%"
        >
          <div class="chart-box">
            <a-progress :percent="60" status="active" />
            <a-progress :percent="100"/>
          </div>
          <template #footer>状态：<span> 接入中</span></template>
        </chart-card-comp>
      </a-col>
    </a-row>

    <div class="">
      <card-comp class="card-border-none">
        <template #content>
          <div class="analysis-chart-tab">
            <a-tabs v-model:activeKey="activeKey" >
              <a-tab-pane key="1" tab="销售额">
                <a-row class="chart-data-content">
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <h3>标题</h3>
                    <echarts-comp
                      :option="state.barOption"
                    ></echarts-comp>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <h3>排名统计</h3>
                    <rank-list-comp :list="state.rankList"/>
                    <a-empty :image="simpleImage" v-if="state.rankList.length === 0"/>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane key="2" tab="访问量">
                <a-empty />
              </a-tab-pane>
              <template #rightExtra>
                <div class="analysis-data-search">
                  <div class="link-item">
                    <a>本日</a>
                    <a>本周</a>
                    <a>本月</a>
                    <a>全年</a>
                  </div>
                  <a-range-picker/>
                </div>
              </template>
            </a-tabs>
          </div>
        </template>
      </card-comp>
    </div>

    <a-row :gutter="15" class="mt15">
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <card-comp class="card-border-none">
          <template #title>
            <span>列表展示</span>
            <div class="fr">
              <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                  <EllipsisOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a href="javascript:;">操作一</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">操作一</a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
          <template #content>
            <table-comp 
              :columns="columns"
              :dataSource="state.nodeList"
              :pages="pages"
              @changePage="changePage"
              size="small"
              :border="true"
            >
            <template #nodeStatus="{record}">
              <a-tag :bordered="false" v-if="record.nodeStatus ==='1'" color="processing">正常</a-tag>
              <a-tag :bordered="false" v-if="record.nodeStatus ==='2'" color="error">异常</a-tag>
            </template>
            </table-comp>
          <!-- e: 表格组件 -->

          </template>
        </card-comp>
      </a-col>
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <card-comp class="card-border-none">
          <template #title>
            <span>统计占比</span>
            <div class="fr">
              <a-space>
                <a-radio-group v-model:value="typeRadio" >
                  <a-radio-button value="1">选项一</a-radio-button>
                  <a-radio-button value="2">选项二</a-radio-button>
                  <a-radio-button value="3">选项三</a-radio-button>
                </a-radio-group>
                <a-dropdown>
                  <a class="ant-dropdown-link" @click.prevent>
                    <EllipsisOutlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a href="javascript:;">操作一</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">操作一</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </a-space>
            </div>
          </template>
          <template #content>
            <div class="data-view-bottom">
              <echarts-comp
                :option="state.pieOption"
              ></echarts-comp>
            </div>
          </template>
        </card-comp>    
      </a-col>
    </a-row>
    

  </div>
</template>

<script setup>
import chartCardComp from '@/components/chartCardComp'
import echartsComp from '@/components/echartsComp'
import trendComp from '@/components/trendComp'
import cardComp from '@/components/cardComp';
import rankListComp from '@/components/rankListComp' 
import tableComp from '@/components/tableComp'
import { getMiniLineOptions } from '@/components/echartsComp/example/miniLine'
import { getMiniBarOptions } from '@/components/echartsComp/example/miniBar'
import { getBarOption } from '@/components/echartsComp/example/bar'
import { getPieOption } from '@/components/echartsComp/example/pie'
import variables from '@/assets/css/variables.module.scss'
import { getTransactionRate, getTransactionChart, getBlockRanking, getNodeList, getBlockPieRate } from '@/api/template/system'
import { Empty } from 'ant-design-vue';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;

import { getTableConfig } from '@/hooks/businessHook'
// 设置默认分页参数
const { pagesDefault } = getTableConfig()
// 绑定分页参数
const pages = reactive({
 ...pagesDefault
})

const activeKey = ref('1')
const typeRadio = ref('2')

const state = reactive({
  miniLineOption: { date: [], data: [] },
  miniBarOptions: { date: [], data: [] },
  barOption: { date: [], data: [] },
  pieOption: {},
  tranRate: {
    week: {},
    day: {}
  },
  rankList: [],
  nodeList: []
})



let columns = ref([
  {
    title: '名称',
    dataIndex: 'chainName',
  },
  {
    title: '数据ID',
    dataIndex: 'nodeAddress',
  },
  {
    title: '状态',
    dataIndex: 'nodeStatus',
  }
]);


getTransactionRateData()
getTransactionChartData()
getBlockRankingData()
getNodeListData()
getBlockPieRateData()

function getTransactionRateData () {
  getTransactionRate().then(res => {
    state.tranRate = res.data
  })
}

function getTransactionChartData () {
  getTransactionChart().then(res => {
    state.miniLineOption = getMiniLineOptions({
      color: variables.baseTheme,
      xdata: res.data.date,
      data: res.data.data
    })
    state.miniBarOptions = getMiniBarOptions({
      color: variables.baseTheme,
      xdata: res.data.date,
      data: res.data.data
    })
    state.barOption = getBarOption({
      color: variables.baseTheme,
      xdata: res.data.date,
      data: res.data.data,
      barWidth: '50'
    })
  })
}

function getBlockRankingData () {
  getBlockRanking().then(res => {
    state.rankList = res.data
  })
}

// 点击分页
function changePage(param) {
  pages.page = param.page
  getNodeListData()
}

function getNodeListData () {
  getNodeList({page: pages.page}).then(res => {
    state.nodeList = res.data
  })
}

function getBlockPieRateData () {
  getBlockPieRate().then(res => {
    state.pieOption = getPieOption({
      data: res.data
    })
  })
}




</script>

<style lang="scss" scoped>
.chart-box{
  width: 100%;
  height: 100%;
}


.link-item {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 15px;
  }
}

.chart-data-content{
  min-height: 200px
}

.data-view-bottom{
  height: 330px
}



</style>