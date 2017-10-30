import { shallow } from 'enzyme'
import React from 'react'
import Score from './Score'

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
})
