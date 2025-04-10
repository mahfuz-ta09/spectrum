import '@/css/home/Banner/Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>Welcome to Our Website</h1>
        <p className='banner__description'>Discover amazing content and connect with others.</p>
        <button className='banner__button'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner