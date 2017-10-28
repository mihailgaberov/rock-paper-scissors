import { shallow } from 'enzyme'
import React from 'react'
import Modes from './Modes'

function setup() {
  let props = {
    label: 'Playing locally',
    isAuthError: jest.fn()
  }

  return shallow(<Modes{...props} />)
}

describe('Modes component', () => {
  it('should render without crashing', () => {
  const wrapper = setup()
  })
})
