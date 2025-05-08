import '@/css/home/FAQ/FAQ.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FAQ = () => {


    return (
        <div className="faq">
            <div className="faq-content">
                <div className="faq-header">
                    <h1 className='faq-header-que'>How can we help you?</h1>
                    <p className='faq-header-det'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatibus numquam. Ea dicta praesentium accusantium possimus consequuntur eos tenetur quibusdam.</p>
                    <button className='faq-ask-que'>ask something else</button>
                </div>

                <div className="faq-question">

                    <div className="question">
                        <input type="checkbox" name="accordion" id="question1" className="question-checkbox" hidden />
                        
                        <label htmlFor="question1" className="question-header">
                            <span className="head-question">Lorem ipsum dolor sit amet.</span>
                            <FontAwesomeIcon icon={faAngleDown} className="plus-icon" />
                        </label>

                        <div className="question-body">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias
                            eum esse, dolore maxime voluptate iste.
                            </p>
                        </div>
                    </div>

                    <div className="question">
                        <input type="checkbox" name="accordion" id="question2" className="question-checkbox" hidden />
                        
                        <label htmlFor="question2" className="question-header">
                            <span className="head-question">Lorem ipsum dolor sit amet.</span>
                            <FontAwesomeIcon icon={faAngleDown} className="plus-icon" />
                        </label>

                        <div className="question-body">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias
                            eum esse, dolore maxime voluptate iste.
                            </p>
                        </div>
                    </div>

                    <div className="question">
                        <input type="checkbox"  name="accordion" id="question3" className="question-checkbox" hidden />
                        
                        <label htmlFor="question3" className="question-header">
                            <span className="head-question">Lorem ipsum dolor sit amet.</span>
                            <FontAwesomeIcon icon={faAngleDown} className="plus-icon" />
                        </label>

                        <div className="question-body">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias
                            eum esse, dolore maxime voluptate iste.
                            </p>
                        </div>
                    </div>

                    <div className="question">
                        <input type="checkbox"  name="accordion" id="question4" className="question-checkbox" hidden />
                        
                        <label htmlFor="question4" className="question-header">
                            <span className="head-question">Lorem ipsum dolor sit amet.</span>
                            <FontAwesomeIcon icon={faAngleDown} className="plus-icon" />
                        </label>

                        <div className="question-body">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias
                            eum esse, dolore maxime voluptate iste.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default FAQ