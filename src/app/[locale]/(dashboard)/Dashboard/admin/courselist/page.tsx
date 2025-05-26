import '@/css/Dashboard/admin/courselist.css'



const page = () => {
    return (
        <div className="course-list-container">
            <div className='course-list-header'>
                <button>list a degree</button>
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
                        <td>2</td>
                        <td>Honours</td>
                        <td>math</td>
                        <td>tensor analysis,mathematical modeling in bio... <button className='all-sub-btn'>all subjects</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default page