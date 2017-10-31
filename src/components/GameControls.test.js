import React from 'react'
import { shallow } from 'enzyme'
import GameControls from './GameControls'
import StyledGameControls from "./styled-components/StyledGameControls"
import StyledWeapon from "./styled-components/StyledWeapon"
import Weapon from "./Weapon"

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

  it('should have StyledGameControls component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledGameControls).length).toEqual(1)
  })

  it('should have label component', () => {
    let wrapper = setup()
    expect(wrapper.find('label').length).toEqual(1)
  })

  it('should have StyledWeapon component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledWeapon).length).toEqual(1)
  })

  it('should have Weapon component', () => {
    let wrapper = setup()
    expect(wrapper.find(Weapon).length).toEqual(1)
  })
})
