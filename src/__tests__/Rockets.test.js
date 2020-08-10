import React from 'react'
import Rockets from '../components/Rockets'
import { shallow } from 'enzyme'

describe('Rockets', () => {
  it('renders with the heading Rockets', () => {
    const wrapper = shallow(<Rockets />)

    expect(wrapper).toContainReact(<h3>Rockets</h3>)
  })
})

