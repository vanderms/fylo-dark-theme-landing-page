import selectors from './features-section.module.scss';
import { FeatureCard } from 'components/cards/features/feature-card';

export function FeaturesSection() {
  return (
    <ul className={selectors["features-section"]}>   
      <li>
        <FeatureCard
          iconUrl='/images/icon-desktop.svg'
          title='Access your files, anywhere'
          description='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        />
      </li>
      <li>
        <FeatureCard
          iconUrl='/images/icon-security.svg'
          title='Security you can trust'
          description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
      </li>
      <li>
       <FeatureCard
          iconUrl='/images/icon-collaboration.svg'
          title='Real-time collaboration'
          description='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        />
      </li>
      <li>
        <FeatureCard
          iconUrl='/images/icon-folder.svg'
          title='Store any type of file'
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </li>     
    </ul>
  )
}