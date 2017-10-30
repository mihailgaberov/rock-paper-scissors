import React from 'react'
import ReactDOM from 'react-dom'
import StyledPlayer from './StyledPlayer'

describe('StyledPlayer component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledPlayer />, div)
  })
})