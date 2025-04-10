'use client'
import '@/css/home/Banner/Banner.css';
import { useTranslations } from 'next-intl';


const Banner = () => {
    const t = useTranslations('Banner');

    return (
      <div className='banner'>
        <div className='banner__content'>
          <h1 className='banner__title'>{t("title")}</h1>
          <p className='banner__description'>{t("description")}</p>
        </div>
      </div>
    )
}

export default Banner