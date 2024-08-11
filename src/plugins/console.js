import { toRaw } from 'vue';

const logState =
    import.meta.env.VITE_APP_ENV == "production" ? false : true

const logTime = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
    const second = date.getSeconds()
    return `${ year }-${ month }-${ day } ${ hour }:${ minute }:${ second }`
}

let con = {
    info(...args) {
        if (!logState) return
        console.info(`[${logTime()}]: `, ...args);
    },
    log(...args) {
        if (!logState) return
        console.log(`[${logTime()}]: `, ...args);
    },
    warn(...args) {
        if (!logState) return
        console.warn(`[${logTime()}]: `, ...args);
    },
    error(...args) {
        if (!logState) return
        console.error(`[${logTime()}]: `, ...args);
    }
}



export default con