/**
 * 导出一个包含白名单路径的常量数组。
 * 这个数组中的路径被认为是安全的，不需要进行额外的权限验证。
 * 
 * @constant whiteList - 包含安全路径的数组。
 * @type {Array<string>}
 */
const whiteList = ['/login']
export default whiteList