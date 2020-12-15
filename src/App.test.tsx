import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('renders fake.codes homepage', () => {
  render(<App />)
  const heading = screen.getByText('fake.codes')
  expect(heading).toBeInTheDocument()
})
