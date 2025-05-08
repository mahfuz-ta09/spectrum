import '@/css/Feed/Feed.css'
import { faFile, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LatestQuestion = () => {
    return (

        <div className="questions">
            
            <div className="single-question">
                <div className="personal-info">
                    <div className="personal-profile">
                        <FontAwesomeIcon icon={faUser} />
                        <p className='personal-profile-name'>hagu tanzim</p>
                    </div>
                    <FontAwesomeIcon icon={faFile} />
                </div>

                <div className="question-body">
                    <h1 className='question-body-text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing 
                        elit. Nam unde tempora totam ad sequi mollitia itaque 
                        ducimus recusandae eveniet illo! Iure debitis maiores 
                        accusamus placeat omnis incidunt, animi beatae, 
                        rem vel aspernatur ipsam sunt! Cumque nobis ab ducimus 
                        quam magni! Nam unde tempora totam ad sequi mollitia itaque 
                        ducimus recusandae eveniet illo! Iure debitis maiores 
                        accusamus placeat omnis incidunt, animi beatae, 
                        rem vel aspernatur ipsam sunt! Cumque nobis ab ducimus 
                        quam magni!... <span className='question-body-see'>see more</span>
                    </h1>
                    <div className="question-img">

                    </div>
                </div>

                <div className="queston-footer">
                    
                    <div className="question-react">
                        <div className="question-like">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>300</p>
                        </div>
                        <div className="question-like">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <p>300</p>
                        </div>
                    </div>

                    <p className='question-comment'>comments</p>

                </div>

            </div>
            
            <div className="feed-pagination">
                <h1>previous / next</h1>
                <div className='feed-control'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>

        </div>

    )
}

export default LatestQuestion