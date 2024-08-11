import axios from 'axios'
import { message, Modal } from 'ant-design-vue';
import { getToken } from '@/utils/storage'
import { tansParams } from '@/utils/tool'
import cache from '@/plugins/cache'
import errorCode from '@/basics/enums/errorCode';
import { useRouter } from 'vue-router'

const router = useRouter()

// 是否显示重新登录
export let isRelogin = { show: false };

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 6000 // 请求超时
})

//请求拦截
service.interceptors.request.use(
    (config) => {
        // 请求前处理
        config.headers['admin-token'] = getToken() || ''

        const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
            // get请求映射params参数
        if (config.method === 'get' && config.params) {
            let url = config.url + '?' + tansParams(config.params);
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        if (!isRepeatSubmit && (config.method === 'get' || config.method === 'post' || config.method === 'put')) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
                time: new Date().getTime()
            }
            const sessionObj = cache.session.getJSON('sessionRequest')
            if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
                cache.session.setJSON('sessionRequest', requestObj)
            } else {
                const s_url = sessionObj.url; // 请求地址
                const s_data = sessionObj.data; // 请求数据
                const s_time = sessionObj.time; // 请求时间
                const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
                if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
                    const message = '数据正在处理，请勿重复提交';
                    setTimeout(() => {
                        cache.session.remove('sessionRequest')
                    }, 1500)
                    return Promise.reject(new Error(message))
                } else {
                    cache.session.setJSON('sessionRequest', requestObj)
                }
            }
        }
        return config
    },
    (error) => {
        // 请求错误
        return Promise.reject(error)
    }
)

// request拦截器
service.interceptors.response.use(res => {
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }
    if (code == 200) {
        return Promise.resolve(res.data)
    }
    // 根据业务系统定义的token失效码分情况处理
    if (code === 401) {
        if (!isRelogin.show) {
            isRelogin.show = true;
            Modal.warning({
                title: '系统提示',
                content: '登录状态已过期，请点击按钮重新登陆',
                okText: '重新登录',
                onOk() {
                    router.push('/login')
                },
                onCancel() {
                    isRelogin.show = false;
                }
            })
        }
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else {
        message.error(msg);
        return Promise.reject('error')
    }
}, error => {
    let { message } = error;
    if (message == "Network Error") {
        message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
        message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    return Promise.reject(error)
})

export default service