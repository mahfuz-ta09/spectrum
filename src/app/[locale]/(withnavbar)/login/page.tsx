import '@/css/Login/Login.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const page = () => {

    
    return (
        <div className='loginpage'>
            <div className='logindetails'>
                <h1>Login</h1>
                <form>
                    <input type="email" className='your email'/>
                    <input type="password" className='your password'/>
                    <button >Login</button>
                </form>
                <div className='logindetails-footer'>
                    <button><FontAwesomeIcon icon={faGoogle}/>google</button>   
                    <Link className='logindetails-footer-lnk' href="/signup">Don&apos;t have account? <span>signup</span></Link>
                </div>
            </div>
        </div>
    )
}

export default page