'use client'
import '@/css/home/Banner/LandingPage.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';



const LandingPage = () => {
    const t = useTranslations('Banner');
    return (
        <div className='landingpage-container'>
            <div className="landingpage-contents">
                
                <div className="landingpage-text-container">
                    <div className="landingpage-text-content">
                        <h5 className='title' >{t("title")}</h5>
                        <p  className='dess'> {t("description")}</p>
                        <div className="links">
                            <Link className='links-button' href='/contact'>{t("contact")}</Link>
                            <Link className="links-button" href="">{t("course")}</Link>
                        </div>
                    </div> 
                </div>

                <div className="landingpage-img-container">
                    <img src="/assets/dashboard-pic.png" alt="landingpage" className='landingpage-img' />
                </div>
                
            </div>
        </div>
  )
}

export default LandingPage