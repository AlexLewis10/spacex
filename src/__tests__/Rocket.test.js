import React from 'react'
import Rocket from '../components/Rocket'
import { shallow } from 'enzyme'

describe('Rocket', () => {
  it('renders with the heading Rocket', () => {
    const wrapper = shallow(<Rocket />)

    expect(wrapper).toContainReact(<h3>Rocket</h3>)
  })
})