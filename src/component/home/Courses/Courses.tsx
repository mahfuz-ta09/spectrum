'use client'
import '@/css/home/Courses/Courses.css';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';


const Courses = () => {
    // const [show,setShow] = useState(false);

    // const handleCourses = () => {
    //     setShow(!show);
    // }

    return (
        <div className='home-courses'>
            <div className="home-courses-container">
                
                <div className="home-courses-header">
                    <h1>Choose your group and course</h1>
                    <h1>to enrole</h1>
                </div>
                
                {/* <div className={show ? "course-group open-course":"course-group"}>
                    <div className="course-group-title">
                        <button onClick={()=>handleCourses()} className='depurtment-btn'>SCIENCE <FontAwesomeIcon icon={faAngleDown}/></button>
                        <button onClick={()=>handleCourses()} className='depurtment-btn'>COMMERCE <FontAwesomeIcon icon={faAngleDown}/></button>
                        <button onClick={()=>handleCourses()} className='depurtment-btn'>HUMANITIES <FontAwesomeIcon icon={faAngleDown}/></button>
                    </div> */}
                    {/* <div className={show ? "course-title" : "close-course"}> */}
                    {/* <div className="course-title">
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
                </div> */}


                <div className="course-years-container">
                    <div className="course-years">
                        <div className="years">
                            <img className='years-image' src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg" alt="" />
                            <div className="details">
                                <h1 className='title'><span>1st</span> year</h1>
                                <h4 className='year-header'>Science</h4>
                                <p>Department of physics</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo 
                                </p>
                            </div>
                            <div className="rear-btn">
                                {/* <button className='rear-btn-1'>enroll</button> */}
                                <button className='rear-btn-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                            </div>
                        </div>
                        <div className="years">
                            <img className='years-image' src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg" alt="" />
                            <div className="details">
                                <h1 className='title'><span>2nd</span> year</h1>
                                <h4 className='year-header'>Science</h4>
                                <p>Department of physics</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo 
                                </p>
                            </div>
                            <div className="rear-btn">
                                {/* <button className='rear-btn-1'>enroll</button> */}
                                <button className='rear-btn-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                            </div>
                        </div>
                        <div className="years">
                            <img className='years-image' src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg" alt="" />
                            <div className="details">
                                <h1 className='title'><span>3rd</span> year</h1>
                                <h4 className='year-header'>Science</h4>
                                <p>Department of physics</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo 
                                </p>
                            </div>
                            <div className="rear-btn">
                                {/* <button className='rear-btn-1'>enroll</button> */}
                                <button className='rear-btn-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                            </div>
                        </div>
                        <div className="years">
                            <img className='years-image' src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg" alt="" />
                            <div className="details">
                                <h1 className='title'><span>4th</span> year</h1>
                                <h4 className='year-header'>Science</h4>
                                <p>Department of physics</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo 
                                </p>
                            </div>
                            <div className="rear-btn">
                                {/* <button className='rear-btn-1'>enroll</button> */}
                                <button className='rear-btn-2'><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courses