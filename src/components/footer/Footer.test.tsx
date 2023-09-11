import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from '@/components/footer/Footer.tsx'

describe('Footer component', () => {
  it('renders without errors', () => {
    const { container } = render(<Footer />)
    expect(container).not.toBeNull()
  })

  it('renders and check the links and text', () => {
    const { getByText, getByRole } = render(<Footer />)
    const githubLink = getByRole('link', {name: 'Github Repo'})
    const linkedinLink = getByRole('link', {name: 'Linkedin'})

    expect(githubLink).toBeTruthy()
    expect(githubLink.getAttribute('href')).toMatch('https://github.com/juanjomartin95/juanjomartin95-app')

    expect(linkedinLink).toBeTruthy()
    expect(linkedinLink.getAttribute('href')).toMatch('https://www.linkedin.com/in/jjmartinramirez/')

    expect(getByText('JuanjoMartin95')).toBeTruthy()
  })
})
