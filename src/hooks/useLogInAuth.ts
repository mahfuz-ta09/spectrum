import { setCookie } from "@/utils/setCookie";
import { useCallback, useState } from "react"

const baseUrl =
  process.env.NEXT_PUBLIC_BUILD === 'local'
    ? process.env.NEXT_PUBLIC_AUTH_URL_LOCAL as string
    : process.env.NEXT_PUBLIC_AUTH_URL_PRODUCTION as string;


const useLogInAuth = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)


    const loginUser = useCallback(async(credentials: any)=>{
        setIsLoading(true)
        setError(null)
        
        try{    
            const response = await fetch(`${baseUrl}/auth/signin`,{
                method:'POST',
                body: credentials,
                credentials: 'include',
            })
            const resData = await response.json()

            localStorage.setItem('accessToken',resData.meta.accessToken)
            setCookie('accessToken', resData.meta.accessToken)
            return resData
        }catch(err:any){
            setError(err)
            return null
        }finally{
            setIsLoading(false)
        }
    },[])


    return { loginUser , isLoading , error }
}

export default useLogInAuth