'use client'
import '@/css/home/Courses/Courses.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';



const Courses = () => {
    const [show,setShow] = useState(false);

    const handleCourses = () => {
        setShow(!show);
    }

    return (
        <div className='home-courses'>
            <div className="home-courses-container">
                
                <div className="home-courses-header">
                    <h1>Choose your group and course</h1>
                    <h1>to enrole</h1>
                </div>
                
                <div className={show ? "course-group open-course":"course-group"}>
                    <button onClick={()=>handleCourses()} className='depurtment-btn'>SCIENCE <FontAwesomeIcon icon={faAngleDown}/></button>
                    <button onClick={()=>handleCourses()} className='depurtment-btn'>COMMERCE <FontAwesomeIcon icon={faAngleDown}/></button>
                    <button onClick={()=>handleCourses()} className='depurtment-btn'>HUMANITIES <FontAwesomeIcon icon={faAngleDown}/></button>
                    <div className={show ? "course-title" : "close-course"}>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>pdasdahysics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physicdfds</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                        <button className='course-title-btn'>physics</button>
                    </div>
                </div>


                <div className="course-years-container">
                    <div className="course-years">
                        <div className="years">
                            <h1 className='title'><span>1st</span> year</h1>
                            <div className="details">
                                <p>Science</p>
                                <p>Department of physics</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo eius laborum? Magni, qui et.</p>
                            </div>
                            <div className="rear-btn">
                                <button className='rear-btn-1'>enroll</button>
                                <button className='rear-btn-2'>details</button>
                            </div>
                        </div>
                        <div className="years">
                            <h1 className='title'><span>2nd</span> year</h1>
                            <div className="details">
                                <p>Science</p>
                                <p>Department of physics</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo eius laborum? Magni, qui et.</p>
                            </div>
                            <div className="rear-btn">
                                <button className='rear-btn-1'>enroll</button>
                                <button className='rear-btn-2'>details</button>
                            </div>
                        </div>
                        <div className="years">
                            <h1 className='title'><span>3rd</span> year</h1>
                            <div className="details">
                                <p>Science</p>
                                <p>Department of physics</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo eius laborum? Magni, qui et.</p>
                            </div>
                            <div className="rear-btn">
                                <button className='rear-btn-1'>enroll</button>
                                <button className='rear-btn-2'>details</button>
                            </div>
                        </div>
                        <div className="years">
                            <h1 className='title'><span>4th</span> year</h1>
                            <div className="details">
                                <p>Science</p>
                                <p>Department of physics</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo eius laborum? Magni, qui et.</p>
                            </div>
                            <div className="rear-btn">
                                <button className='rear-btn-1'>enroll</button>
                                <button className='rear-btn-2'>details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courses