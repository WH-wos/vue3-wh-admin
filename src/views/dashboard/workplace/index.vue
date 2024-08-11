<template>
  <div class="workplace mb25">
    <div class="app-container">
        <a-page-header :title="$t('workplaceTitle')" style="padding: 0;">
          <a-skeleton :loading="loading" active>
            <div class="clearfix">
              <div class="page-header-content">
                <div class="avatar">
                  <a-avatar size="large" :src="avatarImage" />
                </div>
                <div class="content">
                  <div class="content-title">
                    {{ timeFix() }}，系统管理员<span class="welcome-text">，欢迎登陆</span>
                  </div>
                  <div class="notice">欢迎预览vue3-wh-admin管理平台，平台使用vue3及antd@4版本编写。</div>
                </div>
              </div>
              <div class="page-header-count">
                <div class="stat-item">
                  <a-statistic title="统计一" :value="state.chainData.accountTotal" />
                </div>
                <div class="stat-item">
                  <a-statistic title="统计二" :value="state.chainData.superTotal" />
                </div>
                <div class="stat-item">
                  <a-statistic title="统计三" :value="state.chainData.subchainTotal" />
                </div>
              </div>
            </div>
          </a-skeleton>
        </a-page-header>
    </div>

    <div class="inline-block-full mt15">
      <a-row :gutter="15">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <card-comp class="card-border-none">
            <template #extra>
              <a href="#">更多</a>
            </template>
            <template #title>卡片组件</template>
            <template #content> 
              <a-skeleton :loading="loading" active>
                <a-card-grid v-for="(item, index) in state.contractList" :key="index" style="padding: 15px;display:inline-block;">
                    <a-card-meta class="card-doc-hide" :title="item.contractName" :description="item.contractDoc">
                      <template #avatar>
                        <a-avatar :src="defImage" />
                      </template>
                    </a-card-meta>
                </a-card-grid>
              </a-skeleton>
              <a-empty :image="simpleImage" v-if="state.contractList.length === 0"/>
            </template>
          </card-comp>

          <card-comp class="card-border-none mt15">
            <template #extra>
              <a href="#">更多</a>
            </template>
            <template #title>List组件</template>
            <template #content>
              <a-skeleton :loading="loading" avatar active>
                <a-list item-layout="horizontal" :data-source="state.blockList">
                  <template #renderItem="{ item }">
                    <a-list-item>
                      <a-list-item-meta>
                        <template #title>
                            由&nbsp;
                            <a href="#">{{ item.address }}</a>
                            &nbsp; 
                            <span>节点出块</span>
                            &nbsp;
                            <span>本块包含 {{ item.blockTxCount }} 交易</span>
                        </template>
                        <template #avatar>
                          <a-avatar :src="defImage" />
                        </template>
                        <template #description>
                          <span class="item-description">{{ item.blockTime }}</span>
                        </template>
                      </a-list-item-meta>
                    </a-list-item>
                  </template>
                </a-list>
              </a-skeleton>
            </template>
          </card-comp>

        </a-col>
        <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
          <card-comp>
            <template #extra>
              <a href="#">更多</a>
            </template>
            <template #title>快速开始/便捷导航</template>
            <template #content>
              <div class="item-group">
                <a>操作一</a>
                <a>操作二</a>
                <a>操作三</a>
                <a>操作四</a>
                <a>操作五</a>
                <a>操作六</a>
                <a-button size="small" type="primary" ghost>
                  <template #icon>
                    <DownloadOutlined />
                  </template>
                  Download
                </a-button>
              </div>
            </template>
          </card-comp>  

          <card-comp class="card-border-none mt15">
            <template #title>数据统计</template>
            <template #content>
              <a-skeleton :loading="loading" active>
                <div class="mt5 mb10">
                  <statistic-comp
                    title="统计一"
                    :number="state.transactionData.total"
                    :icon="defImage"
                    titleLink="https://www.baidu.com"
                  ></statistic-comp>
                  <statistic-comp
                    title="统计二"
                    :number="state.transactionData.dayTotal"
                    :icon="defImage"
                    titleLink="https://www.baidu.com"
                  ></statistic-comp>
                  <statistic-comp
                    title="统计三"
                    :number="state.transactionData.monthTotal"
                    :icon="defImage"
                    titleLink="https://www.baidu.com"
                  ></statistic-comp>
                </div>
              </a-skeleton>
            </template>
          </card-comp>

        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script setup>
import { timeFix } from '@/utils/tool';
import cardComp from '@/components/cardComp';
import statisticComp from '@/components/statisticComp/typeOne.vue'
import { getSystemInfo, getBlockList, getContractList } from '@/api/template/system'
import { Empty } from 'ant-design-vue';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;

import avatarImage from '@/assets/images/def-img-r.png'
import defImage from '@/assets/images/def-img-r.png'

const loading = ref(true);
const state = reactive({
  chainData: {},
  transactionData: {},
  blockList: [],
  contractList: []
})

const closeLoading = () => {
  setTimeout(() => {
    loading.value = false;
  },1500)
};
closeLoading()


function getSystemInfoData () {
  getSystemInfo().then(res => {
    state.chainData = res.data.chain
    state.transactionData = res.data.transaction
  })
}

function getBlockListData () {
  getBlockList().then(res => {
    state.blockList = res.data
  })
}

function getContractListData () {
  getContractList().then(res => {
    state.contractList = res.data
  })
}

getSystemInfoData()

getBlockListData()
getContractListData()

</script>

<style lang="scss" scoped>
.page-header-content{
  float: left;
  .avatar{
    display: inline-block;
    vertical-align: top;
    span { width: 60px;height: 60px; }
  }
  .content{
    display: inline-block;
    margin-left: 20px;
    .content-title{
      font-size: 20px;
      padding-bottom: 3px;
    }
    .notice{
      color: $base-theme-text;
    }
  }
}

.page-header-count{
  float: right;
  .stat-item{
    position: relative;
    display: inline-block;
    padding: 0 32px;
  }
  .stat-item::after{
    position: absolute;
    top: 8px;
    right: 0;
    width: 1px;
    height: 40px;
    background-color: #e8e8e8;
    content: "";
  }
  .stat-item:last-child::after{
    display: none;
  }
}

::v-deep .card-border-none.ant-card-bordered{
  border: 0;
}

.workplace{
  .item-group {
    font-size: 0;
    a {
      color: $base-theme-label-text;
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }
}

</style>