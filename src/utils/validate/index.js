import Regex from "./regexEnum"

const regexEnum = new Regex().getRegexEnum()

/**
 * @param {String}   自定义校验类型
 * @returns {Object} 正则表表达式
 */
export function getRegexByRule(rule) {
    return regexEnum[rule]
}
/**
 * @param {String}   自定义校验类型
 * @param {String}   待校验内容
 * @returns {Object} 校验结果
 */
export function regexData(rule, string) {
    const reg = regexEnum[rule].rule
    const result = reg.test(string)
    return {
        result: result,
        errorMessage: !result ? regexEnum[rule].msg : null
    }
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    const externalReg = getRegexByRule('url_external')
    return externalReg.rule.test(path)
}