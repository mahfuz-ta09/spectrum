'use client'
import '@/css/Dashboard/DashBoardLayout.css'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { sideNavItem } from './Dashboard/sideNavItem'



const layout = ({children}: {children: React.ReactNode}) => {
    const roles = sideNavItem("admin")

    return (
        <div className="dashboard-layout">
            <div className="nav-items">
                <img className='nav-items-img' src="https://aiolympiad.xyz/img/ai-olympiad.png" alt="" />
                <div className='nav-items-links'>
                    <Link href="/" className='nav-items-link active'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Profile</h5>
                    </Link>
                    <Link href="/" className='nav-items-link'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>My Classes</h5>
                    </Link>
                    <Link href="/" className='nav-items-link'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Course</h5>
                    </Link>
                    <Link href="/" className='nav-items-link'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Course</h5>
                    </Link>
                    <Link href="/" className='nav-items-link'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Course</h5>
                    </Link>
                    <Link href="/" className='nav-items-link'>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Course</h5>
                    </Link>
                </div>
                <div className="nav-links-footer">
                    <Link className='nav-footer-home' href="/">home</Link>
                    <Link className='nav-footer-logout' href="/">logout</Link>
                </div>
            </div>
            <div className='dash-content'>
                <p>title:{roles[0]?.title}</p>
                <div className=''>

                </div>
                {children}
            </div>
        </div>
    )
}

export default layout