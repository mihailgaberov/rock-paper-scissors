import { shallow } from 'enzyme'
import React from 'react'
import Weapon from './Weapon'

function setup() {
  let props = {

  }

  return shallow(<Weapon {...props} />)
}

describe('Weapon component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
