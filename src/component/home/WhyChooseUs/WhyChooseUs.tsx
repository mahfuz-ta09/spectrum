import '@/css/home/WhyChooseUs/WhyChooseUs.css';


const WhyChooseUs = () => {
    return (
      <div className='why-choose-us-container'>
        <div className='wcu-container'>
          <div className='wcu-content'>

              <div className='wcu-first-half'>
                <h1 className='wcu-first-half-header'>Why Choose Us</h1>
                <p className='wcu-first-half-pera'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eos repellat alias error provident vel.
                </p>
                <div className='wcu-first-half-img'>
                  
                  <div className='wcu-first-half-img-1'>
                    <img className='img-half' src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg" alt="" />
                    <img className='img-half' src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg" alt="" />
                  </div>
                  <div className='wcu-first-half-img-2'>
                    <img className='img-half' src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg" alt="" />
                    <img className='img-half' src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg" alt="" />
                  </div>

                </div>
              </div>

              <div className='wcu-second-half'>

                <div className='wcu-second-half-card'>
                  <h1 className='card-number'>01</h1>
                  <h1 className='wcu-second-half-card-header'>Pan-University Resource Hub</h1>
                  <p className='wcu-second-half-card-pera'>
                    The only platform covering all major universities - from (examples) 
                    with verified course materials. 
                  </p>
                </div>

                <div className='wcu-second-half-card'>
                  <h1 className='card-number'>02</h1>
                  <h1 className='wcu-second-half-card-header'>Expert-Verified Content</h1>
                  <p className='wcu-second-half-card-pera'>
                    Every resource is validated by department toppers and alumni 
                    for 100% accuracy. 
                  </p>
                </div>

                <div className='wcu-second-half-card'>
                <h1 className='card-number'>03</h1>
                  <h1 className='wcu-second-half-card-header'>Smart AI Search</h1>
                  <p className='wcu-second-half-card-pera'>
                    Pinpoint exactly what you need with university-specific filters
                    (course codes, level/semesters, professor names).  
                  </p>
                </div>

                <div className='wcu-second-half-card'>
                <h1 className='card-number'>04</h1>
                  <h1 className='wcu-second-half-card-header'>Earn While Learn</h1>
                  <p className='wcu-second-half-card-pera'>
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

export default WhyChooseUs