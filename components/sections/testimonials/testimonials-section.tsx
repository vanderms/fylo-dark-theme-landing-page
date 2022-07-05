import { TestimonialCard } from 'components/cards/testimonials/testimonial-card';
import selectors from './testimonials-section.module.scss';


export function TestimonialsSection() {
  return (
    <ul className={selectors["testimonials-section"]}>
      <li>
        <TestimonialCard
          avatar='/images/profile-1.jpg'
          name='Satish Patel'
          role='Founder & CEO, Huddle'
          testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        />
      </li>
      <li>
        <TestimonialCard
          avatar='/images/profile-2.jpg'
          name='Bruce McKenzie'
          role='Founder & CEO, Huddle'
          testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        />
      </li>
      <li>
        <TestimonialCard
          avatar='/images/profile-3.jpg'
          name='Iva Boyd'
          role='Founder & CEO, Huddle'
          testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        />
      </li>
    </ul>
  )
}