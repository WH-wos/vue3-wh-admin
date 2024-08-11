const TokenKey = 'BC-Admin-Token'
let storage = window['localStorage']

export function getToken() {
    return storage.getItem(TokenKey)
}

export function setToken(token) {
    return storage.setItem(TokenKey, token)
}

export function removeToken() {
    return storage.removeItem(TokenKey)
}