import React from 'react'
import ReactDOM from 'react-dom'
import StyledModesArea from './StyledButton'

describe('StyledModesArea component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledModesArea />, div)
  })
})