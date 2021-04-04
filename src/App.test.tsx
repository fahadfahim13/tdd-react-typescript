import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// setup file
import { shallow, mount } from 'enzyme';
import Counter from './Counter/Counter';

describe('Counter Testing', () => {

  let wrapper: any; 
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  it('renders learn react link', () => {

    expect(wrapper.find('h1').text()).toContain('This is Counter App');

  });


  test("render a button with text of `increment`", () => {
    expect(wrapper.find('#increment-btn').text()).toBe("Increment");
  })

  test("Render the inital value of a state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test('Render the click of a button', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  })

  test("render click on decrement button", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("render decrement button click and value not negative", () => {
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).not.toBe("-1");
  })
  
})