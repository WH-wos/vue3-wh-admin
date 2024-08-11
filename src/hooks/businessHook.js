import { createVNode } from "vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

/**
 * @returns {Object} 查询表单基础样式配置
 */
export function getSearchFormConfig() {
    return {
        layout: 'inline',
        labelCol: { style: { width: '100px' } },
        formContentStyle: { width: '182px' }
    }
}
/**
 * @returns {Object} 表格分页默认参数
 */
export function getTableConfig() {
    return {
        pagesDefault: {
            page: 1,
            pageSize: 10,
            total: 100,
        }
    }
}
/**
 * @returns {Object} 表格宽度占比默认参数
 */
export function getFormConfig() {
    return {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 16,
        }
    }
}