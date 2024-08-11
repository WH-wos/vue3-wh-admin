<template>
  <div class="app-container">
    <card-container-comp
        title="卡片标题"
        desc="描述.........."
        :style="{padding: '0 50px 10px 0'}"  
    >
      <template #desc>
          <span>
            <a-tooltip>
              <template #title>提示</template>
              <CommentOutlined/>
            </a-tooltip>
          </span>
      </template>
    </card-container-comp>

    <!-- <a-divider /> -->

    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="快速开始">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xxl="4" :span="8" v-for="(item, i) in state.contractList" :key="i">
              <card-comp
                :cardMeta="{
                  title: item.contractName,
                  description: item.contractDoc,
                  avatarUrl: defImage
                }"
                :hoverable="true"
                :style="{margin: '0 0 10px 0'}"
                class="card-doc-hide"
              >
              <template #actions>
                <a-tooltip>
                  <template #title>编辑</template>
                  <edit-outlined />
                </a-tooltip>
                <a-tooltip>
                  <template #title>删除</template>
                  <DeleteOutlined />
                </a-tooltip>
              </template>
              </card-comp>
            </a-col>
          </a-row>  
          
        </a-tab-pane>
        <a-tab-pane key="2" tab="产品简介">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xxl="4" :span="6" v-for="(item, i) in state.contractList" :key="i">
              <card-comp
                :style="{margin: '0 0 15px 0'}"
                :hoverable="true"
              >
              <template #cover>
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
                <template #content>
                  <h3>{{ item.contractName }}</h3>
                  <a-tooltip>
                    <template #title>{{ item.contractDoc }}</template>
                    <p class="line-two-hide">{{ item.contractDoc }}</p>
                  </a-tooltip>
                </template>
              </card-comp>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="3" tab="产品文档">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xxl="4" :span="6" v-for="(item, i) in state.contractList" :key="i">
              <card-comp
                :style="{margin: '0 0 15px 0'}"
                :hoverable="true"
              >
              <template #content>
                <h3>{{ item.contractName }}</h3>
                <a-tooltip>
                  <template #title>{{ item.contractDoc }}</template>
                  <p class="line-two-hide">{{ item.contractDoc }}</p>
                </a-tooltip>
              </template>
            </card-comp>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>

  </div>
</template>

<script setup>
import cardContainerComp from '@/components/cardContainerComp'
import cardComp from '@/components/cardComp'
import { getContractList } from '@/api/template/system'


import defImage from '@/assets/images/def-img-r.png'

const activeKey = ref('1');
const state = reactive({
  contractList: []
})

getContractListData()

function getContractListData () {
  getContractList().then(res => {
    state.contractList = res.data
  })
}


</script>

<style>

</style>