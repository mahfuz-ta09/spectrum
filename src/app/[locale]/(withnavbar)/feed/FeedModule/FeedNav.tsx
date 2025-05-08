import '@/css/Feed/Feed.css'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FeedNav = () => {
    return (
        <div className="question-nav">
            <div className="my-question">
                <h1 className="tag-1">My questions</h1>
                
                <div className='question-list'>
                    <div className='list-item'>
                        <p className='question-body-head'>Lorem ipsum dolor sit amet...</p>
                        <button><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                        <button><FontAwesomeIcon icon={faCancel} /></button>
                    </div>
                    <div className='list-item'>
                        <p className='question-body-head'>Lorem ipsum dolor sit amet...</p>
                        <button><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                        <button><FontAwesomeIcon icon={faCancel} /></button>
                    </div>
                    <div className='list-item'>
                        <p className='question-body-head'>Lorem ipsum dolor sit amet...</p>
                        <button><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                        <button><FontAwesomeIcon icon={faCancel} /></button>
                    </div>
                </div>

                <button  className='see-question-btn'>see all</button>
            </div>


            <div className="my-question">
                <h1 className="tag-1">Saved question</h1>
                
                <div className='question-list'>
                    <div className='list-item'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <button><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                        <button><FontAwesomeIcon icon={faCancel} /></button>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    )
}

export default FeedNav