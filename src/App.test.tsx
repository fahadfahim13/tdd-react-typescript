import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Counter Testing', () => {
  test('renders learn react link', () => {

    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('This is Counter App');

    // render(<App />);
    // const linkElement = screen.getByText('This is Counter App');
    // expect(linkElement).toBeInTheDocument();
  });
  
})