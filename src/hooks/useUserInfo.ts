'use client'
import { jwtPayload } from "@/types/utilsType"
import { getToken } from "@/utils/getToken"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"


export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState<{ email: string; role: string; status: string}>({
        email: "",
        role: "",
        status: "",
    })

    const userTokenInfo = () =>{
        const token = getToken()
        
        if(token){
            try{
                const decoded:jwtPayload = jwtDecode(token)
                
                setUserInfo({
                    email: decoded?.email ||'',
                    role: decoded?.role || '',
                    status: decoded?.status || '',
                })
            }catch(err){
                console.log(err)
                setUserInfo({
                    email: "",
                    role: "",
                    status: "",
                })
            }
        }else{
            setUserInfo({
                email: "",
                role: "",
                status: "",
            })
        }
    }

    useEffect(()=>{
        userTokenInfo()
        window.addEventListener('storage', userTokenInfo)
        return () => {
            window.removeEventListener('storage', userTokenInfo)
        }
    },[])

    return userInfo
} 