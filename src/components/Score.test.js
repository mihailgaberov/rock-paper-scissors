import { shallow } from 'enzyme'
import React from 'react'
import Score from './Score'
import StyledScore from "./styled-components/StyledScore"
import StyledButton from "./styled-components/StyledButton"

function setup(winner, isLoading) {
  let props = {
    winner: winner,
    player1: 'Player',
    player2: 'Computer',
    onClickPlay: jest.fn(),
    loading: isLoading
  }

  return shallow(<Score {...props} />)
}

describe('Score component', () => {
  it('should render without crashing', () => {
    const wrapper = setup(1, true)
  })

  it('should have StyledScore component', () => {
    let wrapper = setup(1, false)
    expect(wrapper.find(StyledScore).length).toEqual(1)
  })

  it('should have a winner', () => {
    let wrapper = setup(1, false)
    expect(wrapper.find('span').at(0).text()).toEqual('Player WINS')
  })

  it('should have StyledButton component', () => {
    let wrapper = setup(1, false)
    expect(wrapper.find(StyledButton).length).toEqual(1)
  })
})
