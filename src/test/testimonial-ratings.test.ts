import { describe, expect, it } from 'vitest'
import { testimonials } from '../lib/portfolio/content'

describe('Verified client ratings', () => {
  it('preserves the five-star rating for all four clients', () => {
    expect(testimonials.map(review => review.rating)).toEqual([5, 5, 5, 5])
  })
})