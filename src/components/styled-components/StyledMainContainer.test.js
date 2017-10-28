import React from 'react'
import ReactDOM from 'react-dom'
import StyledMainContainer from './StyledMainContainer'

describe('StyledMainContainer component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledMainContainer />, div)
  })
})
