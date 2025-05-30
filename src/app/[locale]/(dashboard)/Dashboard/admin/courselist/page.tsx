'use client'
import '@/css/Dashboard/admin/courselist.css'
import ListDegree from './ListDegree'
import { useState } from 'react'


const Page = () => {
    const [isListDegree,setIsListDegree] = useState(false)

    return (
        <div className="course-list-container">
            <div className='course-list-header'>
                <button onClick={()=>setIsListDegree(!isListDegree)}>list a degree</button>
            </div>
            <h1 className='listed-degree'>Listed degree</h1>
            
            <div className="table-container">
                <table className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Degree</th>
                        <th>Department</th>
                        <th>Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Honours</td>
                        <td>math</td>
                        <td>tensor analysis,mathematical modeling in bio... <button className='all-sub-btn'>all subjects</button></td>
                    </tr>
                </tbody>
                </table>
            </div>

            <ListDegree 
                isListDegree={isListDegree}
                setIsListDegree={setIsListDegree}
            />
        </div>
    )
}

export default Page