import selectors from './footer.module.scss';
import Image from 'next/image';
import Logo from 'public/images/logo.svg';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={selectors["footer"]}>
      <div className={selectors["image-wrapper"]}>
        <Image src={Logo} alt='' />      
      </div>
      <div className={selectors["second-row"]}>
        <address className={selectors["contact-info"]}>
          <p className={selectors["contact-item"] + '  ' + selectors['location']}>
            <span className={selectors["screenreader"]}>Location:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className={selectors["contact-item"] + " " + selectors["phone"]}>
            <span className={selectors["screenreader"]}>Phone:</span>
            +1-543-123-4567
          </p>
          <p className={selectors["contact-item"] + '  ' + selectors['email']}>
            <span className={selectors["screenreader"]}>Email:</span>
            example@fylo.com
          </p>
        </address>
        <div className={selectors["navegation-container"]}>
          <ul className={selectors['navlink-list']}>
            <li><Link href='/'>
              <a className={selectors['navlink']}>About Us</a>
            </Link></li>
             <li><Link href='/'>
                <a className={selectors['navlink']}>Jobs</a>
            </Link></li>
             <li><Link href='/'>
                <a className={selectors['navlink']}>Press</a>
            </Link></li>
             <li><Link href='/'>
                <a className={selectors['navlink']}>Blog</a>
            </Link></li>
          </ul>
           <ul className={selectors['navlink-list']}>
            <li><Link href='/'>
                <a className={selectors['navlink']}>Contact Us</a>
            </Link></li>
             <li><Link href='/'>
                <a className={selectors['navlink']}>Terms</a>
            </Link></li>
             <li><Link href='/'>
                <a className={selectors['navlink']}>Privacy</a>
            </Link></li>
          </ul>
        </div>
        <ul className={selectors["social-link-list"]}>
          <li><a
              className={selectors['social-link'] + ' ' + selectors['facebook']}
              aria-label='facebook'
              href="http://wwww.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
          </a></li>
          <li><a
              className={selectors['social-link'] + ' ' + selectors['twitter']}
              aria-label='twitter'
              href="http://wwww.twitter.com"
              target="_blank"
              rel="noopener noreferrer">
          </a></li>
          <li><a
               className={selectors['social-link'] + ' ' + selectors['instagram']}
              aria-label='instagram'
              href="http://wwww.instagram.com"
              target="_blank"
              rel="noopener noreferrer">
          </a></li>
        </ul>
      </div>
    </footer>
  )
}