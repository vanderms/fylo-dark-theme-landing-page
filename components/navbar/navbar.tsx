import selectors from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/images/logo.svg';


export function Navbar() {
  return (
    <nav className={selectors["navbar"]}>
      <Link href='/'>
        <a className={selectors['logo']} aria-label='homepage'>
          <Image src={Logo} alt=''/>
        </a>
      </Link>
      <ul className={selectors["navlink-list"]}>
        <li><Link href='/'><a className={selectors['navlink']}>Features</a></Link></li>
        <li><Link href='/'><a className={selectors['navlink']}>Team</a></Link></li>
        <li><Link href='/'><a className={selectors['navlink']}>Sign in</a></Link></li>
      </ul>
    </nav>
  )
}