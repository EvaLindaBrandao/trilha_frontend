import { getCookie, deleteCookie, setCookie } from 'cookies-next'

const TRILHA_TOKEN = '@trilha_frontend:token'
const EXPIRES = new Date(Date.now() + 60 * 60 * 1000)

export const TokenService = {

    saveToken(data: any, options: any = {}) {
        setCookie(TRILHA_TOKEN, data, { expires: EXPIRES, ...options })
    },

    deleteToken(options = {}) {
        deleteCookie(TRILHA_TOKEN, options)
    },
    getToken(){
        return getCookie(TRILHA_TOKEN)
    }
}
