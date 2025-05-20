'use client'
import '@/css/Dashboard/DashBoardLayout.css'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { sideNavItem } from './Dashboard/sideNavItem'


const layout = ({children}: {children: React.ReactNode}) => {
    const roles = sideNavItem("admin")

    const handleOpenNav = () => {
        const navItems = document.getElementsByClassName('nav-items')[0]
        if (navItems) {
            navItems.classList.add('open-dash')
        }
    }

    const handleCloseNav = () => {
        const navItems = document.getElementsByClassName('nav-items')[0]
        if (navItems) {
            navItems.classList.remove('open-dash')
        }
    }

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
                    <button onClick={()=>handleCloseNav()} ><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
                    <Link className='nav-footer-home' href="/">home</Link>
                    <Link className='nav-footer-logout' href="/">logout</Link>
                </div>
            </div>

            <div className='dash-content'>
                <p>title:{roles[0]?.title}</p>
                <div className='dashboard-user'>
                    <button onClick={()=>handleOpenNav()} ><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                    <p>hello mr/mrs</p>
                    <h1>amarnam@busyness.com</h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout