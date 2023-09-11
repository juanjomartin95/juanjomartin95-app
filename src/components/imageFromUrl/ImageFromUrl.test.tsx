import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ImageFromUrl from '@/components/imageFromUrl/ImageFromUrl.tsx'

describe('Image component', () => {
  it('renders spinner initially', () => {
    const { container } = render(<ImageFromUrl src='https://randomuser.me/api/portraits/lego/0.jpg' alt='user image' />)
    expect(container).not.toBeNull()
  })
})
