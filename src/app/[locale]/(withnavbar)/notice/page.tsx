import '@/css/Notice/Notice.css'
import Footer from "@/component/Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


const Page = () => {
    return (
      <div className='notices-container'>
            <div className="notices-banner">
                <h1 className="notices-title">Notices</h1>  
            </div>

            <div className='notice-headeline'>
                <h1>Recent stories</h1>
                <form>
                    <input type="text" placeholder='search here' />
                    <button><FontAwesomeIcon icon={faArrowAltCircleRight} /> </button>
                </form>
            </div>

            <table className="notice-board">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a target='_blank' href="">Lorem ipsum dolor sit amet.</a></td>
                        <td>2025-05-08</td>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td><a target='_blank' href="">Lorem ipsum dolor sit amet.</a></td>
                        <td>2025-05-08</td>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td><a target='_blank' href="">Lorem ipsum dolor sit amet.</a></td>
                        <td>2025-05-08</td>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td><a target='_blank' href="">Lorem ipsum dolor sit amet.</a></td>
                        <td>2025-05-08</td>
                    </tr>
                    
                </tbody>
            </table>


          <Footer />
      </div>
    )
}

export default Page