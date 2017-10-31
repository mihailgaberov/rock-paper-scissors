import { shallow } from 'enzyme'
import React from 'react'
import { App } from './App'

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
})
