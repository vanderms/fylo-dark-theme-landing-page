import selectors from './hero-section.module.scss';
import Image from 'next/image';
import illustration from 'public/images/illustration-intro.png';
import Link from 'next/link';

export function HeroSection() {
  return (
    <header className={selectors["hero-section"]}>
      <div className={selectors["image-container"]}>
        <Image src={ illustration } alt=''/>
      </div>
      <h1 className={selectors["headline"]}>All your files in one secure location, accessible anywhere.</h1>
      <p className={selectors["subheadline"]}>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
      <Link href='/'>
        <a className={selectors['call-to-action']}>Get Started</a>
      </Link>
    </header>
  )
}