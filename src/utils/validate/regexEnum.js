class Regex {
    constructor() {
        this.REGEX_ENUM = null
    }
    getRegexEnum() {
        this.REGEX_ENUM = {
            phone_cn: {
                rule: '',
                msg: ''
            },
            phone_ml: {
                rule: '',
                msg: ''
            },
            email: {
                rule: '',
                msg: ''
            },
            idNumber: {
                rule: '',
                msg: ''
            },
            url_ip: {
                rule: '',
                msg: ''
            },
            url_domail: {
                rule: '',
                msg: ''
            },
            url_external: {
                rule: /^(http?:|https?:|mailto:|tel:)/,
                msg: '链接地址格式有误！'
            },
            password_regex_one: {
                rule: '',
                msg: ''
            },
            password_regex_two: {
                rule: '',
                msg: ''
            },
            data_type_string: {
                rule: '',
                msg: ''
            },
            data_type_array: {
                rule: '',
                msg: ''
            },
            string_lowerCase: {
                rule: '',
                msg: ''
            },
            string_upperCase: {
                rule: '',
                msg: ''
            },
            string_cn: {
                rule: '',
                msg: ''
            }
        }
        return this.REGEX_ENUM
    }
}

export default Regex