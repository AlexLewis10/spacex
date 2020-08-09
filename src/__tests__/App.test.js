import React from 'react'
import App from '../components/App'
import { shallow } from 'enzyme'
import Rocket from '../components/Rocket'
import Dragon from '../components/Dragon'

describe('App', () => {
  it('renders with the heading SpaceX', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>SpaceX</h2>)
  })
})

describe('Can open Rockets and Dragons pages', () => {
  it('clicking `Rockets` button shows rockets', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('#Rockets')
    button.simulate('click')

    expect(wrapper.find(Rocket)).toHaveLength(1)
  })

  it('clicking `Dragons` button shows dragons', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('#Dragons')
    button.simulate('click')

    expect(wrapper.find(Dragon)).toHaveLength(1)
  })

  it('if `Rocket` is clicked `Dragons` does cannot show', () => {
    const wrapper = shallow(<App />)
    const dragonsButton = wrapper.find('#Dragons')
    const rocketsButton = wrapper.find('#Rockets')
    dragonsButton.simulate('click')
    rocketsButton.simulate('click')

    expect(wrapper.find(Dragon)).toHaveLength(0)
  })
})

