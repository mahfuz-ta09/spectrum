import '@/css/Feed/Feed.css'
import AskQuestion from './FeedModule/AskQuestion'
import LatestQuestion from './FeedModule/LatestQuestion'
import FeedNav from './FeedModule/FeedNav'
import TopQuestions from './FeedModule/TopQuestion'



const FeedHome = () => {
    return (
        <div className='feed-container'>
            <div className="feed-content">
                
                <div className="question-part">
                    
                    <AskQuestion />

                    <div className="latest">
                        <div className="latest-title">
                            {/* <BiPencil className='latest-icon'/>  */}
                            <h1>Latest questions</h1>
                        </div>
                        <LatestQuestion />
                    </div>



                    <div className="latest">
                        <div className="latest-title">
                            {/* <BiArrowToTop className='latest-icon'/>  */}
                            <h1>Top questions</h1>
                        </div>
                        <TopQuestions />
                    </div>

                </div>

                <FeedNav />
                
            </div>
        </div>
    )
}

export default FeedHome