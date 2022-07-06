import selectors from './productive-section.module.scss';
import illustration from 'public/images/illustration-stay-productive.png';
import Image from 'next/image';
import Link from 'next/link';

export function ProductiveSection() {
  return (
    <section className={selectors["productive-section"]} aria-labelledby='productive-section-title'>
      <div className={selectors["image-wrapper"]}>
        <Image src={illustration} alt='' priority={true} />
      </div>
      <div className={selectors["content"]}>
        <h2 className={selectors["title"]} id='productive-section-title'>Stay productive, wherever you are</h2>
        <div className={selectors["text-container"]}>
          <p className={selectors["text"]}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p className={selectors["text"]}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <Link href='/'>
          <a className={selectors['call-to-action']}>See how Fylo works
            <span className={selectors["arrow"]}></span>
          </a>
        </Link>
      </div>
    </section>
  )
}