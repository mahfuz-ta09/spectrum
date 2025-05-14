import { removeCookieFromServer } from "./authAction"
import { removeCookieToken } from "./removeCookie"
import { removeLocalToken } from "./removeToken"


export const logOutHandler = async () => {
    const res = await removeCookieFromServer()
    console.log(res)
    if(res?.status === 200){
        removeLocalToken()
        await removeCookieToken()
        window.location.href = "/"
    }
} 