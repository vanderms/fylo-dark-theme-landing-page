import selectors from './feature-card.module.scss';
import Image from 'next/image';


interface FeatureCardProps {
  iconUrl: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = (props: FeatureCardProps) => {
  return (
    <article className={selectors["feature-card"]}>
      <div className={selectors["icon-wrapper"]}>
        <Image src={props.iconUrl} alt='' layout='fill'/>
      </div>
      <h2 className={selectors["title"]}>{ props.title }</h2>
      <p className={selectors["description"]}>{ props.description }</p>
    </article>
  )
}