import { shallow } from 'enzyme'
import React from 'react'
import Loader from './Loader'

function setup() {
  let props = {

  }

  return shallow(<Loader {...props} />)
}

describe('Loader component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
