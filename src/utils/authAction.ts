

const baseUrl =
  process.env.NEXT_PUBLIC_BUILD === 'local'
    ? process.env.NEXT_PUBLIC_AUTH_URL_LOCAL as string
    : process.env.NEXT_PUBLIC_AUTH_URL_PRODUCTION as string;


export const removeCookieFromServer = async () => {
    try{
        const response = await fetch(`${baseUrl}/auth/logout`,{
            method:'POST',
            credentials: 'include',
        })
        const resData = await response.json()
        return resData
    }catch(err){
        console.log(err)
    }
} 