import React from 'react'
import App from '../components/App'
import { shallow } from 'enzyme'

describe('App', () => {
  it('renders with the heading SpaceX', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>SpaceX</h2>)
  })
})

