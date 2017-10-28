import React from 'react'
import ReactDOM from 'react-dom'
import GameControls from './GameControls'

describe('GameControls component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GameControls />, div)
  })
})