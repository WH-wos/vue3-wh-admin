<template>
  <div class="app-container mb20">
    <h3>组件详情</h3>
    <div class="mt15 mb15">
      <a-space>
        <a-button type="primary" v-debounce-click="modalShow">弹窗</a-button>
        <a-button type="primary" v-debounce-click="drawerShow">抽屉</a-button>
      </a-space>
    </div>
  </div>

  <div class="app-container mb20">
    <a-descriptions title="基本信息">
      <a-descriptions-item label="数据名称">{{ chainDetail.nodeName }}</a-descriptions-item>
      <a-descriptions-item label="IP地址">{{ chainDetail.nodeConsensusIp }}</a-descriptions-item>
      <a-descriptions-item label="是否运行">{{ chainDetail.monitoring ? '是' : '否' }}</a-descriptions-item>
      <a-descriptions-item label="类型">{{ chainDetail.blockchain }}</a-descriptions-item>
      <a-descriptions-item label="数据ID">{{ chainDetail.bid }}</a-descriptions-item>
    </a-descriptions>

    <a-divider />

    <a-descriptions title="服务器信息" bordered>
      <a-descriptions-item label="服务器类型">{{ serverDetail.type }}</a-descriptions-item>
      <a-descriptions-item label="公网IP地址">{{ serverDetail.publicIp }}</a-descriptions-item>
      <a-descriptions-item label="内网IP地址">{{ serverDetail.intranetIp }}</a-descriptions-item>
      <a-descriptions-item label="操作系统">{{ serverDetail.operatingSystem }}</a-descriptions-item>
      <a-descriptions-item label="到期时间" :span="2">{{ serverDetail.startTime }} ～ {{ serverDetail.endTime }}</a-descriptions-item>
      <a-descriptions-item label="状态" :span="3">
        <a-badge status="error" text="异常" v-if="serverDetail.state === 0" />
        <a-badge status="processing" text="运行中" v-if="serverDetail.state === 1" />
      </a-descriptions-item>
    </a-descriptions>
    
    <a-divider />

    <a-row class="mb15" :gutter="15">
      <a-col :sm="24" :md="12" :xl="8">
        <card-comp>
          <template #title>
            <span>数据详情</span>
            <div class="fr pointer">
              <FormOutlined @click="handleEdit"/>
            </div>
          </template>  
          <template #content>
              <div class="detail-content">
                <div class="detail-content-item text-right">
                  <label>数据引用限制:</label>
                  <div class="value">{{ blockDetail.block.height }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>总账户数:</label>
                  <div class="value">{{ blockDetail.chain.accountTotal }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>总交易量:</label>
                  <div class="value">{{ blockDetail.transaction.total }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>待处理交易量:</label>
                  <div class="value">{{ blockDetail.block.pendingTransaction }}</div>
                </div>
              </div>
          </template>
        </card-comp>
      </a-col>
      <a-col :sm="24" :md="12" :xl="8">
        <card-comp>
          <template #title>
            <span>数据信息</span>
            <div class="fr pointer">
              <FormOutlined />
            </div>
          </template>  
          <template #content>
              <div class="detail-content">
                <div class="detail-content-item text-right">
                  <label>数据名称:</label>
                  <div class="value">{{ chainDetail.nodeName }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>ID:</label>
                  <div class="value">{{ chainDetail.bid }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>IP地址:</label>
                  <div class="value">{{ chainDetail.nodeConsensusIp }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>是否可运行:</label>
                  <div class="value">{{ chainDetail.monitoring ? '是' : '否' }}</div>
                </div>
              </div>
          </template>
        </card-comp>
      </a-col>
      <a-col :sm="24" :md="12" :xl="8">
        <card-comp>
          <template #title>
            <span>证书信息</span>
            <div class="fr pointer">
              <FormOutlined />
            </div>
          </template>  
          <template #content>
              <div class="detail-content">
                <div class="detail-content-item text-right">
                  <label>证书类型:</label>
                  <div class="value">{{ certificateDetail.type }}</div>
                </div>
                <div class="detail-content-item text-right">
                  <label>证书有效期:</label>
                  <div class="value">
                    <p>{{ certificateDetail.startTime }} 至 {{ certificateDetail.endTime }}</p>
                    <p v-if="certificateDetail.timeOut > 0">
                      <a-tag color="error">已到期
                        <!-- {{ certificateDetail.timeOut }}天 -->
                      </a-tag>
                    </p>
                  </div>
                </div>
              </div>
          </template>
        </card-comp>
      </a-col>
    </a-row>

    <!-- 弹窗详情 -->
    <modal-handle-comp 
      :visible="state.modalVisible" 
      :title="state.modalTitle"
      :isFoorter="true"
      width="500px"
      @handleCancel="modalCancel"
    >
    <div class="detail-content">
      <div class="detail-content-item text-right">
        <label>数据名称:</label>
        <div class="value">{{ chainDetail.nodeName }}</div>
      </div>
      <div class="detail-content-item text-right">
        <label>ID:</label>
        <div class="value">{{ chainDetail.bid }}</div>
      </div>
      <div class="detail-content-item text-right">
        <label>IP地址:</label>
        <div class="value">{{ chainDetail.nodeConsensusIp }}</div>
      </div>
      <div class="detail-content-item text-right">
        <label>是否运行:</label>
        <div class="value">{{ chainDetail.monitoring ? '是' : '否' }}</div>
      </div>
    </div>
      <template #footer>
        <!-- 取消按钮 -->
        <a-button @click="modalCancel">取消</a-button>
      </template>
    </modal-handle-comp>

    <!-- 抽屉详情 -->
    <drawerHandleComp
      :visible="state.drawerVisible"
      :title="state.drawerTitle"
      @drawerClose="drawerClose"
    >
      <div class="detail-content">
        <div class="detail-content-item text-right">
          <label>数据名称:</label>
          <div class="value">{{ chainDetail.nodeName }}</div>
        </div>
        <div class="detail-content-item text-right">
          <label>ID:</label>
          <div class="value">{{ chainDetail.bid }}</div>
        </div>
        <div class="detail-content-item text-right">
          <label>IP地址:</label>
          <div class="value">{{ chainDetail.nodeConsensusIp }}</div>
        </div>
        <div class="detail-content-item text-right">
          <label>是否运行:</label>
          <div class="value">{{ chainDetail.monitoring ? '是' : '否' }}</div>
        </div>
      </div>
    </drawerHandleComp>

    <!-- s: 编辑 -->
    <handle-comp 
      ref="HandleCompRef"
    >
    </handle-comp>
    <!-- e: 编辑 -->

  </div>
</template>

<script setup>
import cardComp from '@/components/cardComp';
import modalHandleComp from '@/components/modalHandleComp';
import drawerHandleComp from '@/components/drawerHandleComp';
import handleComp from './handleComp'
import { message } from 'ant-design-vue';
import { getNodeDetail, getSystemInfo, getCertificateDetail, getServerInfo } from '@/api/template/system'

const HandleCompRef = ref(null)

const state = reactive({
  modalVisible: false,
  modalTitle: '节点详情',
  drawerVisible: false,
  drawerTitle: '节点详情',
  chainDetail: {},
  blockDetail: {
    chain: {},
    transaction: {},
    block:{}
  },
  certificateDetail: {},
  serverDetail: {}
});

const modalCancel = () => {
  state.modalVisible = false;
}

const modalShow = () => {
  state.modalVisible = true;
}

const drawerShow = () => {
  state.drawerVisible = true;
}

const drawerClose = () => {
  state.drawerVisible = false;
}

// 点击编辑
const handleEdit = () => {
  console.log('a')
  HandleCompRef.value.openModal()
}

const waitAlert = () => {
  message.info('开发中')
}


getNodeDetailData()
getSystemInfoData()
getCertificateDetailData()
getServerInfoData()

function getNodeDetailData() {
  getNodeDetail().then(res => {
    state.chainDetail = res.data
  })
}

function getSystemInfoData () {
  getSystemInfo().then(res => {
    state.blockDetail = res.data
  })
}

function getCertificateDetailData () {
  getCertificateDetail().then(res => {
    state.certificateDetail = res.data
  })
}

function getServerInfoData () {
  getServerInfo().then(res => {
    state.serverDetail = res.data
  })
}

const { chainDetail, blockDetail, certificateDetail, serverDetail } = toRefs(state);
</script>

<style>

</style>