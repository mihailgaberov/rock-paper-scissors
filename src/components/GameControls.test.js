import React from 'react'
import { shallow } from 'enzyme'
import GameControls from './GameControls'

function setup() {
  let props = {
    weapons: ['rock'],
    onClickWeapon: jest.fn()
  }

  return shallow(<GameControls {...props} />)
}

describe('GameControls component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
