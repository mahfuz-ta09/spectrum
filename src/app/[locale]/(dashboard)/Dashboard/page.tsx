import '@/css/Dashboard/profile.css'


const page = () => {
    
    return (
        <div className="profile-container">
            <h1 className="profile-container-header">Profile</h1>
            <div className="profile-content">
                <img className='user-profile-picture' src="https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg" alt="" />
                <div className='profile-content-info'>
                    <h1 className='user-name'>Name: <span>hi</span></h1>
                    <h1 className='created-date'>Account created: <span>12/12/2025</span></h1>
                    <h1 className='login-provider'>Logged in by: <span>google</span></h1>
                </div>
            </div>
        </div>
    )
}

export default page