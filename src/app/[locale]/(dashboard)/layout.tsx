'use client'
import '@/css/Dashboard/DashBoardLayout.css'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sideNavItem } from './Dashboard/sideNavItem'
import ProfileData from './Dashboard/ProfileData'
import { usePathname } from 'next/navigation'
import Link from 'next/link'



const Layout = ({children}: {children: React.ReactNode}) => {
    const roles = sideNavItem("admin")
    const pathname = usePathname()

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
                    <Link href="/Dashboard" className={(pathname==="/en/Dashboard"||pathname===("/bn/Dashboard")?'nav-items-link active':"nav-items-link")}>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Profile</h5>
                    </Link>
                    
                    <Link href="/Dashboard/admin/courses"  className={(pathname.includes("/courses")?'nav-items-link active':"nav-items-link")}>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>Courses</h5>
                    </Link>
                    <Link href="/Dashboard/admin/courselist" className={(pathname.includes("/courselist")?'nav-items-link active':"nav-items-link")}>
                        <FontAwesomeIcon className='nav-items-link-icon' icon={faUser}/>
                        <h5 className='nav-items-link-name'>course list</h5>
                    </Link>
                    
                </div>
                <div className="nav-links-footer">
                    <button className='nav-controll-1' onClick={()=>handleCloseNav()} ><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
                    <Link className='nav-footer-home' href="/">home</Link>
                    <Link className='nav-footer-logout' href="/">logout</Link>
                </div>
            </div>

            <div className='dash-content'>
                <p>title:{roles[0]?.title}</p>
                <ProfileData />
                <button className='nav-controll-2' onClick={()=>handleOpenNav()} ><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                {children}
            </div>
        </div>
    )
}


export default Layout