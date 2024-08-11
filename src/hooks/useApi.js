export default function useApi(requestName) {
    const loading = ref(false)
    const dataSource = ref(null)

    const fetchResource = (params) => {
        loading.value = true
        return requestName(params).then(res => {
            // 按照约定，api返回的结果直接复制给result
            dataSource.value = res.data
            loading.value = false
        }).catch(e => {
            loading.value = false
        }).finally(() => {
            loading.value = false
        })
    }
    return {
        loading,
        dataSource,
        fetchResource
    }
}