import React from 'react'
import ReactDOM from 'react-dom'
import StyledGameControls from './StyledGameControls'

describe('StyledGameControls component', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledGameControls />, div)
  })
})