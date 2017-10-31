import { shallow } from 'enzyme'
import React from 'react'
import Player from './Player'

function setup() {
  let props = {

  }

  return shallow(<Player {...props} />)
}

describe('Player component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
