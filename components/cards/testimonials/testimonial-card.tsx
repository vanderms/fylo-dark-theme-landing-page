import selectors from './testimonial-card.module.scss';
import Image from 'next/image';


interface TestimonialCardProps{
  avatar: string;
  name: string;
  testimonial: string;
  role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  return (
    <figure className={selectors["testimonial-card"]}>
      <blockquote>
        <p className={selectors['testimonial']}>{props.testimonial}</p>
      </blockquote>
      <figcaption className={selectors['figcaption']}>
        <span className={selectors["image-wrapper"]}>
          <Image src={props.avatar} width={24} height={24} alt=''/>
        </span>
        <span className={selectors["text-container"]}>
          <span className={selectors["name"]}>{ props.name }</span>
          <span className={selectors["role"]}>{ props.role }</span>
        </span>
      </figcaption>
    </figure>
  )
}