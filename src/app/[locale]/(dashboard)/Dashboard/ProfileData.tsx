'use client'
import '@/css/Dashboard/DashBoardLayout.css'
import { useUserInfo } from "@/hooks/useUserInfo"


const ProfileData = () => {
    const userInfo = useUserInfo()
    
    return (
        <div className='dashboard-user'>
            <h1 className='dashuser-info'>{userInfo?.email}</h1>
            <h1 className='dashuser-info'>|status-{userInfo?.status}</h1>
            <h1 className='dashuser-info'>|role-{userInfo?.role}</h1>
        </div>
    )
}

export default ProfileData