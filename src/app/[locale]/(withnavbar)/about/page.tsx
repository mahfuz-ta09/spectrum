import Footer from "@/component/Footer/Footer"
import '@/css/About/About.css';

const page = () => {
    return (
      <div className="about-container">
          <div className="about-header">
            <h1 className="header-message">About us</h1>
            <p className="header-addition">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatibus.</p>
          </div>


          <div className="about-content">
              <div className="about-content-holder">
                <div className="about-content-left">
                  <p className="about-content-left-header">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                  </p>
                  <p className="about-content-left-header-addition">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                  </p>
                </div>
                <div className="about-content-right">
                  <img src="https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg?auto=compress&cs=tinysrgb" alt="" />
                </div>
              </div>

              <div className="about-cards">
                <div className="about-card">
                  <h1 className="about-card-header"><span>01</span> Our Mission</h1>
                  <p className="about-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
                <div className="about-card">
                  <h1 className="about-card-header"><span>02</span> Our Vision</h1>
                  <p className="about-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
                <div className="about-card">
                  <h1 className="about-card-header"><span>03</span> Our Values</h1>
                  <p className="about-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
              </div>

          </div>


          <Footer />
      </div>
    )
}

export default page