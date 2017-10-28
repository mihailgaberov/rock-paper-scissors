import React from 'react'
import ReactDOM from 'react-dom'
import GameControls from './GameControls'

it('GameControls renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GameControls />, div)
})
