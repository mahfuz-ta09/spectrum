'use client'
import '../globals.css'
import '@/css/Dashboard/DashBoardLayout.css'



const layout = ({children}: {children: React.ReactNode}) => {
    
    return (
        <div className="dashboard-layout">
            {children}
        </div>
    )
}

export default layout