export const getValueByKey = (arr, keyName, keyValue) => {
    const item = arr.find(item => item["id"] === keyValue);
    return item ? item[keyName] : null;
}

export const nodeStateFilter = (state) => {
    switch (state) {
        case '1':
            return "属性一"
        case '2':
            return "属性二"
        default:
            return "-"
    }
}