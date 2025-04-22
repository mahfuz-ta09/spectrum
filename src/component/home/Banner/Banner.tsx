'use client'
import '@/css/home/Banner/Banner.css';
import { faBook, faMoneyBill, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';


const Banner = () => {
    const t = useTranslations('Banner');

    return (
      <div className="container">      
        <div className="banner">      
            <div className="content">
              <h1>{t("title")}</h1>
              <p>{t("description")}</p>
              <div className="links">
                <button type="button">{t("contact")}</button>
                <button type="button">{t("course")}</button>
              </div>
            </div>  

            <div className='banner-details'>
              <div className="banner-detail">
                <FontAwesomeIcon icon={faBook} className='details-icon' />
                <h1>500+</h1>
                <p>courses</p>
              </div>
              <div className="banner-detail">
                <FontAwesomeIcon icon={faUsers} className='details-icon' />
                <h1>5000+</h1>
                <p>active users</p>
              </div>
              <div className="banner-detail">
                <FontAwesomeIcon icon={faMoneyBill} className='details-icon' />
                <h1>50taka</h1>
                <p>per course</p>
              </div>
            </div>
        
        </div>
      </div>
    )
}

export default Banner