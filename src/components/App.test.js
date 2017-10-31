import { shallow } from 'enzyme'
import React from 'react'
import { App } from './App'
import StyledMainContainer from "./styled-components/StyledMainContainer"
import Modes from "./Modes";
import Game from "./Game";
import GameControls from "./GameControls";
import Score from "./Score";

function setup() {
  let props = {
    serverChoice: 'rock',
    getServerChoice: jest.fn()
  }

  return shallow(<App {...props} />)
}

describe('App component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })

  it('should have StyledMainContainer component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledMainContainer).length).toEqual(1)
  })

  it('should have Modes component', () => {
    let wrapper = setup()
    expect(wrapper.find(Modes).length).toEqual(1)
  })

  it('should have Game component', () => {
    let wrapper = setup()
    expect(wrapper.find(Game).length).toEqual(1)
  })

  it('should have GameControls component', () => {
    let wrapper = setup()
    expect(wrapper.find(GameControls).length).toEqual(1)
  })
})