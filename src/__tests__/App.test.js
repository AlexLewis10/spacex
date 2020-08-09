import React from 'react'
import App from '../components/App'
import { shallow } from 'enzyme'
import Rocket from '../components/Rocket'

describe('App', () => {
  it('renders with the heading SpaceX', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>SpaceX</h2>)
  })
})

describe('App can open Rockets page', () => {
  xit('clicking `Rockets` button shows rockets', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('#Rockets')
    button.simulate('click')

    expect(wrapper.find(Rocket)).toHaveLength(1)
  })
})

