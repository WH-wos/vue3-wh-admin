const httpCodeEnum = {
    200: "success",
    400: "http error",
    401: "http error",
}
export function formatCallBackData(data, status = 200) {
    return {
        code: status,
        data: data,
        msg: httpCodeEnum[status]
    }
}
// *** 开发环境代理标识，同.env.development文件中的VITE_APP_BASE_API值保持一致
export const proxyTag = '/api'