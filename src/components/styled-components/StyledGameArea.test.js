import React from 'react'
import ReactDOM from 'react-dom'
import StyledGameArea from './StyledGameArea'

describe('StyledGameArea component', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledGameArea />, div)
  })
})