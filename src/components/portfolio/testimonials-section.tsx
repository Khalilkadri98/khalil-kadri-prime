import { ArrowUpRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { testimonialCopy, testimonials, type Language } from '@/lib/portfolio/content'

export function TestimonialsSection({ language }: { language: Language }) {
  return (
    <section id="testimonials" className="content-section testimonials-section" aria-labelledby="testimonials-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span>05 /</span>{testimonialCopy.label[language]}</div>
            <h2 id="testimonials-title">{testimonialCopy.title[language]}</h2>
          </div>
          <p>{testimonialCopy.introduction[language]}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(review => (
            <article key={review.id} className="testimonial-card">
              <div className="testimonial-rating" role="img" aria-label={testimonialCopy.rating[language]}>
                <span className="testimonial-stars" aria-hidden="true">
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} />)}
                </span>
                <span aria-hidden="true">{review.rating.toFixed(1)} / 5</span>
              </div>
              <h3 lang="en">{review.title}</h3>
              <p className="testimonial-dates" lang="en">{review.dateRange}</p>
              <blockquote lang="en"><p>{review.quote}</p></blockquote>
              <div className="testimonial-endorsements">
                <h4>{testimonialCopy.endorsedSkills[language]}</h4>
                <ul className="chips" lang="en">
                  {review.skills.map(skill => <li className="chip" key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="testimonials-cta">
          <Button asChild variant="outline" className="cta">
            <a href="#contact">{testimonialCopy.cta[language]}<ArrowUpRight /></a>
          </Button>
        </div>
      </div>
    </section>
  )
}