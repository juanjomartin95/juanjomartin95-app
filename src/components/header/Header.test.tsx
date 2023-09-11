import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from '@/components/header/Header.tsx'

describe('Header component', () => {
  it('renders without errors', () => {
    const { container } = render(<Header />)
    expect(container).not.toBeNull()
  })
})
