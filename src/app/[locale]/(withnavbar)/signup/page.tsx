import '@/css/Login/Login.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const page = () => {
    return (
        <div className='loginpage'>
            <div className='logindetails'>
                <h1>Signup</h1>
                <form>
                    <input type="text" placeholder='your name'/>
                    <input type="email"  placeholder='your email'/>
                    <input type="password" placeholder='your password'/>
                    <button >Login</button>
                </form>
                <div className='logindetails-footer'>
                    <button><FontAwesomeIcon icon={faGoogle}/>google</button>   
                    <Link className='logindetails-footer-lnk' href="/login">Already have an account? <span>login</span></Link>
                </div>
            </div>
        </div>
    )
}

export default page