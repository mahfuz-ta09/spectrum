import '@/css/Dashboard/admin/AddCourse.css'



const AddCourse = ({ addCourse, setAddCourse }: { addCourse: boolean; setAddCourse: React.Dispatch<React.SetStateAction<boolean>> }) => {
    
    return (
        <div className={addCourse ? "add-course" : "hide"}>
            <button className='cancel-btn' onClick={()=>setAddCourse(!addCourse)}>cancel</button>
            <div className='add-course-container'>
                <h1 className='add-course-title'>Add  Course</h1>
                
                
                <form className='add-course-form'>

                    <div className='add-course-form-group'>
                        <label htmlFor="course-degree">degree name</label>
                        <select id="course-degree">
                            <option value="honours">honours</option>
                            <option value="humanity">humanity</option>
                            <option value="arts">arts</option>
                        </select>
                    </div>

                    <div className='add-course-form-group'>
                        <label htmlFor="department-name">department name</label>
                        <select id="department-name">
                            <option value="">common</option>
                            <option value="math">math</option>
                            <option value="chemistry">chemistry</option>
                            <option value="biology">biology</option>
                        </select>
                    </div>
                    
                    <div className='add-course-form-group'>
                        <label htmlFor="course-name">course name</label>
                        <select id="course-name">
                            <option value="math">math</option>
                            <option value="chemistry">chemistry</option>
                            <option value="biology">biology</option>
                        </select>
                    </div>
                    

                    <div className='add-course-form-group'>
                        <label htmlFor="course-year-number">how many years:(just add numbers. ex:1st year/2nd year)</label>
                        <input min="1" max="4" type="number" id='course-year-number' />
                    </div>

                    <button type="submit" className='add-course-btn'>Add Course</button>

                </form>
            </div>
        </div>
    )
}

export default AddCourse