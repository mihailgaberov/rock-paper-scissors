import { shallow } from 'enzyme'
import React from 'react'
import Weapon from './Weapon'
import StyledWeapon from "./styled-components/StyledWeapon"
import Loader from "./Loader";

function setup(loading) {
  let props = {
    icon: 'rock',
    loading: loading
  }

  return shallow(<Weapon {...props} />)
}

describe('Weapon component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })

  it('should have a StyledWeapon component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledWeapon).length).toEqual(1)
  })

  it('should have Loader component if loading', () => {
    let wrapper = setup(true)
    expect(wrapper.find(Loader).length).toEqual(1)
    wrapper = setup(false)
    expect(wrapper.find(Loader).length).toEqual(0)
  })
})
