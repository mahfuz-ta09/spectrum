'use client'
import '@/css/Login/Login.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '@/utils/firebaseConfig'
import useLogInAuth from '@/hooks/useLogInAuth'
import { toast } from 'react-toastify'
import { convertFormData } from '@/utils/convertFormData'
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/router'

type Inputs = {
  email: string
  password: string
}


const Page = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const { loginUser } = useLogInAuth()
    const { register , handleSubmit , reset } = useForm<Inputs>()
    const router = useRouter()


    const googlePopUpLogin = async() =>{
        try{
            const result = await signInWithPopup(auth,provider)
            const credential:any = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            
            if(token && user){
                const formData = convertFormData({
                    name:user.displayName??"",
                    email:user.email??"",
                    photo:user.photoURL??"",
                    phone:user.phoneNumber??"",
                    provider:"google"
                })

                try{
                    const logInResponse = await loginUser(formData)
                    if(logInResponse.success){
                        reset()
                        router.push('/Dashboard')
                        toast.success(logInResponse?.message)
                    }else{
                        toast.error(logInResponse.message)
                    }
                }catch(err){
                    console.log(err)
                    toast.error("Error logged in");
                }
            }
            
        }catch(err){
            console.log(err)
            toast.error("Error logged in");
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        if(!data?.email || !data?.password){
            toast.error("No empty field allowed")
            return
        }

        const formData = convertFormData({
            email:data.email,
            password:data.email,
            provider:"custom"
        })
        

        try{
            const logInResponse = await loginUser(formData)
            if(logInResponse.success){
                localStorage.setItem('accessToken',logInResponse.meta.accessToken)
                reset()
                toast.success(logInResponse?.message)
            }else{
                toast.error(logInResponse.message)
            }
        }catch(err:any){
            console.log(err)
            toast.error(err?.message)
        }
    }


    return (
        <div className='loginpage'>
            <div className='logindetails'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="your email" {...register("email")}  className='your email'/>
                    <input type="password" placeholder="your password"  {...register("password")} className='your password'/>
                    <button type='submit'>Login</button>
                </form>
                <div className='logindetails-footer'>
                    <button onClick={googlePopUpLogin}><FontAwesomeIcon icon={faGoogle}/>google</button>   
                    <Link className='logindetails-footer-lnk' href="/signup">Don&apos;t have account? <span>signup</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Page