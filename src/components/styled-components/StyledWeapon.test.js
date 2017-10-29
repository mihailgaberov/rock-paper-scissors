import React from 'react'
import ReactDOM from 'react-dom'
import StyledWeapon from './StyledWeapon'

describe('StyledWeapon component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StyledWeapon />, div)
  })
})