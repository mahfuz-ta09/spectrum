'use client'
import '@/css/Dashboard/admin/courses.css'
import { useState } from 'react'
import AddCourse from './AddCourse'



const Page = () => {
    const [addCourse,setAddCourse] = useState(false)

    return (
        <div className="dash-course-container">
            <div className="course-button">
                <button onClick={() => setAddCourse(!addCourse)} className='add-course-button'>
                    add course
                </button>
            </div>

            <div className="course-container">
                
                <div className="signle-course-item">
                    <h1 className='subject-title'>physics</h1>
                    
                    <h1 className='subject-group'>Department: math/common</h1>
                    <h1 className='subject-group'>Department: honours</h1>
                    
                    <div className="all-year-subject">
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>1st year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>2nd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>3rd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>4th year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                    </div>

                    <div className='subject-buttons'>
                        <button className='subject-add'>add</button>
                        <button className='subject-details'>details</button>
                    </div>
                </div>
                
                <div className="signle-course-item">
                    <h1 className='subject-title'>physics</h1>
                    
                    <h1 className='subject-group'>Department: math/common</h1>
                    <h1 className='subject-group'>Department: honours</h1>
                    
                    <div className="all-year-subject">
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>1st year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>2nd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>3rd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>4th year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                    </div>

                    <div className='subject-buttons'>
                        <button className='subject-add'>add</button>
                        <button className='subject-details'>details</button>
                    </div>
                </div>
                
                <div className="signle-course-item">
                    <h1 className='subject-title'>physics</h1>
                    
                    <h1 className='subject-group'>Department: math/common</h1>
                    <h1 className='subject-group'>Department: honours</h1>
                    
                    <div className="all-year-subject">
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>1st year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>2nd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>3rd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>4th year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                    </div>

                    <div className='subject-buttons'>
                        <button className='subject-add'>add</button>
                        <button className='subject-details'>details</button>
                    </div>
                </div>

                <div className="signle-course-item">
                    <h1 className='subject-title'>physics</h1>
                    
                    <h1 className='subject-group'>Department: math/common</h1>
                    <h1 className='subject-group'>Department: honours</h1>
                    
                    <div className="all-year-subject">
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>1st year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>2nd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>3rd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>4th year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                    </div>

                    <div className='subject-buttons'>
                        <button className='subject-add'>add</button>
                        <button className='subject-details'>details</button>
                    </div>
                </div>

                <div className="signle-course-item">
                    <h1 className='subject-title'>physics</h1>
                    
                    <h1 className='subject-group'>Department: math/common</h1>
                    <h1 className='subject-group'>Department: honours</h1>
                    
                    <div className="all-year-subject">
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>1st year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>
                        
                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>2nd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>3rd year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                        
                        <div className='years-buttons'>
                            <h1 className='subject-year'>4th year:</h1>
                            <button className='subject-delete'>delete</button>
                            <button className='subject-details'>details</button>
                        </div>

                    </div>

                    <div className='subject-buttons'>
                        <button className='subject-add'>add</button>
                        <button className='subject-details'>details</button>
                    </div>
                </div>

            </div>
            
            <AddCourse 
                addCourse={addCourse}
                setAddCourse={setAddCourse}
            />
        </div>
    )
}

export default Page