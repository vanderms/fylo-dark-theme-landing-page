import selectors from './call-to-action-section.module.scss';
import { GetStartedForm } from 'components/forms/get-started/get-started-form';


export function CallToActionSection() {
  return (
    <section className={selectors["call-to-action-section"]} aria-labelledby='call-to-action-title'>
      <h2 className={selectors["title"]} id='call-to-action-title'>
        Get early access today
      </h2>
      <p className={selectors["subtitle"]}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <GetStartedForm />
    </section>
  )
}