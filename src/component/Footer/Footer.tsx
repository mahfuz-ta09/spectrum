import '@/css/Footer/Footer.css';
import { Link } from '@/i18n/navigation'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';


const Footer = () => {
    const t = useTranslations('NavBar');
    return (
        <div className="footer-container">
            <img className='footer-img' src="https://aiolympiad.xyz/img/ai-olympiad.png" alt="" />
            <ul className='footer-links'>
                <Link className='footer-link' href="/"><FontAwesomeIcon icon={faHome}/></Link>
                <Link className='footer-link' href="/feed" >{t('feed')}</Link>
                <Link className='footer-link' href="/notices">{t('notices')}</Link>
                <Link className='footer-link' href="/about">{t('about')}</Link>
            </ul>
            <div className="footer-social-icon">
                <FontAwesomeIcon icon={faFacebook} className='fb' />
                <FontAwesomeIcon icon={faInstagram} className='ig' />
            </div>
            <div>
                <p className='copy-warning'>Copyright © 2025 SPECTRUM. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer