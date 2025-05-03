import Footer from "@/component/Footer/Footer"
import '@/css/About/About.css';

const page = () => {
    return (
      <div className="about-container">
          <div className="about-header">
            <h1 className="header-message">About us</h1>
            <p className="header-addition">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatibus.</p>
          </div>
          <Footer />
      </div>
    )
}

export default page