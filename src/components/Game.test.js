import React from 'react'
import { shallow } from 'enzyme'
import Game from './Game'

function setup() {
  let props = {
    player1: {},
    player2: {}
  }

  return shallow(<Game {...props} />)
}

describe('Game component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
