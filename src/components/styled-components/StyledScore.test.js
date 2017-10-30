import React from 'react'
import ReactDOM from 'react-dom'
import StyledScore from './StyledScore'

describe('StyledScore component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledScore />, div)
  })
})