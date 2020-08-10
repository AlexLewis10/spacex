import React from 'react'
import Dragons from '../components/Dragons'
import { shallow } from 'enzyme'

describe('Dragons', () => {
  it('renders with the heading Dragon', () => {
    const wrapper = shallow(<Dragons />)

    expect(wrapper).toContainReact(<h3>Dragons</h3>)
  })
})