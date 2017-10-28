import React from 'react'
import ReactDOM from 'react-dom'
import StyledButton from './StyledButton'

describe('StyledButton component', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledButton />, div)
  })
})