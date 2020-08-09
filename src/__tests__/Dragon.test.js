import React from 'react'
import Dragon from '../components/Dragon'
import { shallow } from 'enzyme'

describe('Dragon', () => {
  it('renders with the heading Dragon', () => {
    const wrapper = shallow(<Dragon />)

    expect(wrapper).toContainReact(<h3>Dragon</h3>)
  })
})