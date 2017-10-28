import React from 'react'
import ReactDOM from 'react-dom'
import StyledMainContainer from './StyledMainContainer'

it('StyledMainContainer renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StyledMainContainer />, div)
})
