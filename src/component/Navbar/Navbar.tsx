'use client';
import '@/css/Navbar/Navbar.css';
import { usePathname , useRouter } from '@/i18n/navigation'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faBars, faCartPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';



const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [short,setShort] = useState(false);
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
        {
          short ?
          <FontAwesomeIcon onClick={()=>setShort(!short)} className='short-angle' icon={faAngleLeft } />:
          <FontAwesomeIcon onClick={()=>setShort(!short)} className='short-angle' icon={faAngleRight} />
        }

        <div className={short? "nav-icons short-open":"nav-icons short-close"}>
            <div className="nav-icon-social">
              <FontAwesomeIcon icon={faFacebook} className='fb' />
              <FontAwesomeIcon icon={faInstagram} className='ig' />
            </div>
            <div className="nav-icon-website">
              <FontAwesomeIcon icon={faBell} className='bell' />
              <FontAwesomeIcon icon={faCartPlus} className='cart' />
            </div>
            <select onChange={handleChange} className='language'>
              <option value="">language</option>
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
        </div>

        
        <div className="nav-links-container">

            <img className='logo' src="https://aiolympiad.xyz/img/ai-olympiad.png" alt="" />


            <div className={(open ? 'nav-links open' : 'nav-links close')}>
              <ul>
                <Link className='nav-link' href="/classes">{t('courses')}</Link>
                <Link className='nav-link active-link' href="/notices">{t('notices')}</Link>
                <Link className='nav-link' href="/feed">{t('feed')}</Link>
                <Link className='nav-link' href="/about">{t('about')}</Link>
              </ul>
            </div>
            
          <div className="bars-login">  
              <button className='classes'>{t('classes')}</button>
              <button className='login'>{t('login')}</button>
              {
                  open ? 
                  <button className="nav-action" onClick={() => setOpen(!open)} ><FontAwesomeIcon style={{fontSize:"32px"}} icon={faClose}/></button> : 
                  <button className="nav-action" onClick={() => setOpen(!open)} ><FontAwesomeIcon icon={faBars}/></button>
              }
          </div>

        </div>
      </div>
  );
};

export default Navbar;