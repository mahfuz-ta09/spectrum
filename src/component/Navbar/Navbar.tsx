'use client';
import '@/css/Navbar/Navbar.css';
import { usePathname , useRouter } from '@/i18n/navigation'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';



const Navbar = () => {
    const [open,setOpen] = useState(false);
    const t = useTranslations('NavBar');
    const router = useRouter();
    const pathname = usePathname();

    const changeLang = (lng: string) => {
      router.push(pathname, { locale: lng });
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      changeLang(e.target.value);
    };


    return (
      <div className='navbar'>
        
        <div className="nav-links-container">
          <h1 style={{color:"black"}}>logo</h1>
            <ul className={(open ? 'nav-links open' : 'nav-links close')}>
              <Link className='nav-link' href="/classes">{t('classes')}</Link>
              <Link className='nav-link' href="/classes">{t('courses')}</Link>
              <Link className='nav-link' href="/notices">{t('notices')}</Link>
              <Link className='nav-link' href="/feed">{t('feed')}</Link>
              <Link className='nav-link' href="/about">{t('about')}</Link>
            </ul>

<div className="nav-icon-container">
          <div className="nav-icons">
            <div className="nav-icon-social">
              <FontAwesomeIcon icon={faFacebook} className='fb' />
              <FontAwesomeIcon icon={faInstagram} className='ig' />
            </div>
            <div className="nav-icon-website">
              <FontAwesomeIcon icon={faBell} className='bell' />
              <FontAwesomeIcon icon={faCartPlus} className='cart' />
              <select onChange={handleChange} className='language'>
                <option value="">language</option>
                <option value="bn">বাংলা</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
          <div className="bars-login">
            
              {
                  open ? 
                  <FontAwesomeIcon className="nav-close" onClick={() => setOpen(!open)} icon={faClose}/> : 
                  <FontAwesomeIcon className="nav-open" onClick={() => setOpen(!open)} icon={faBars}/>
              }
              <button className='login'>{t('login')}</button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
{/* <div className="nav-icon-container"> */}
          {/* <div className="nav-icons">
            <div className="nav-icon-social">
              <FontAwesomeIcon icon={faFacebook} className='fb' />
              <FontAwesomeIcon icon={faInstagram} className='ig' />
            </div>
            <div className="nav-icon-website">
              <FontAwesomeIcon icon={faBell} className='bell' />
              <FontAwesomeIcon icon={faCartPlus} className='cart' />
              <select onChange={handleChange} className='language'>
                <option value="">language</option>
                <option value="bn">বাংলা</option>
                <option value="en">English</option>
              </select>
            </div>
          </div> */}
        {/* </div> */}