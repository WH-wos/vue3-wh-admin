import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
import { Modal } from 'ant-design-vue';

// 删除提示框
export default function useDelConfirm() {
    function showDelConfirm(onOk) {
        Modal.confirm({
            title: '提示',
            icon: h(ExclamationCircleOutlined),
            content: h('div', { style: 'color:red;' }, '是否删除此数据？'),
            okText: '删除',
            cancelText: '取消',
            onOk: onOk,
        })
    }
    return {
        showDelConfirm
    };
}