import '@/css/home/Speciality/Speciality.css';
import { faBuilding, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Speciality = () => {
    return (
        <div className='speciality-container'>
            <div className="specialty-section">
                <div className='specialty-content'>
                    
                    <div className="first-half">
                        <h1>Our Specialities</h1>
                        <p>
                            We're building Bangladesh's  <span>most comprehensive academic ecosystem</span> 
                            - where sharing knowledge rewards you. At <span>SPECTRUM</span>, we're transforming exam prep across Bangladesh's universities
                            with these key strengths:  
                        </p>
                        <img src="https://aiolympiad.xyz/img/ai-olympiad.png" alt="" />
                    </div>

                    <div className="second-half">
                        <div>
                            <FontAwesomeIcon icon={faBuilding} className='icon' />
                            <h1>Pan-University Resource Hub</h1>
                            <p>
                                The only platform covering all major universities - from (examples) 
                                with verified course materials. 
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                            <h1>Expert-Verified Content</h1>
                            <p>
                                Every resource is validated by department toppers and alumni 
                                for 100% accuracy. 
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLightbulb} className='icon' />
                            <h1>Smart AI Search</h1>
                            <p>
                                Pinpoint exactly what you need with university-specific filters
                                (course codes, level/semesters, professor names).  
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faMoneyCheck} className='icon' />
                            <h1>Earn While You Learn</h1>
                            <p>
                                Contribute your notes/papers to our crowdsourced library and 
                                get paid for every 100 downloads of your uploads!  
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Speciality