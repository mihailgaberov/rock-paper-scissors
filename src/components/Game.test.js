import React from 'react'
import { shallow } from 'enzyme'
import Game from './Game'
import StyledGameArea from "./styled-components/StyledGameArea"
import Player from "./Player"

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

  it('should have StyledGameArea component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledGameArea).length).toEqual(1)
  })

  it('should have Player component two times', () => {
    let wrapper = setup()
    expect(wrapper.find(Player).length).toEqual(2)
  })

  it('should have a div vs between the players', () => {
    let wrapper = setup()
    expect(wrapper.find('div').at(0).text()).toEqual('vs')
  })
})
