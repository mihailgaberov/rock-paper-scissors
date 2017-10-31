import { shallow } from 'enzyme'
import React from 'react'
import Player from './Player'
import StyledPlayer from "./styled-components/StyledPlayer"
import Weapon from "./Weapon"

function setup() {
  let props = {
    label: 'Player',
    weapon: 'rock'
  }

  return shallow(<Player {...props} />)
}

describe('Player component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })

  it('should have StyledPlayer component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledPlayer).length).toEqual(1)
  })

  it('should have Weapon component', () => {
    let wrapper = setup()
    expect(wrapper.find(Weapon).length).toEqual(1)
  })

  it('should have a div with class name', () => {
    let wrapper = setup()
    expect(wrapper.find('div').at(0).props().className).toEqual('name')
  })

  it('should have a div with class score', () => {
    let wrapper = setup()
    expect(wrapper.find('div').at(1).props().className).toEqual('score')
  })
})
