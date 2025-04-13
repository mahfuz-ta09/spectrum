'use client'
import '@/css/home/Banner/Banner.css';
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
        </div>
      </div>
    )
}

export default Banner