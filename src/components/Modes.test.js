import { shallow } from 'enzyme'
import React from 'react'
import Modes from './Modes'
import StyledModesArea from "./styled-components/StyledModesArea"
import StyledButton from "./styled-components/StyledButton"

function setup() {
  let props = {
    label: 'Playing locally',
    onClickHandler: jest.fn()
  }

  return shallow(<Modes {...props} />)
}

describe('Modes component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })

  it('should have StyledModesArea component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledModesArea).length).toEqual(1)
  })

  it('should have StyledButton component', () => {
    let wrapper = setup()
    expect(wrapper.find(StyledButton).length).toEqual(1)
  })
})
