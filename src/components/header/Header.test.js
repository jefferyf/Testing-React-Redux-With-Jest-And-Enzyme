import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import toJson from 'enzyme-to-json';
import Header from './Header';

const setUp = () => {
  const wrapper = shallow(<Header />);
  return wrapper;
}

describe('Header Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = setUp();
  });
  
  describe('snapshot tests', () => {
    it('renders correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Personally, I think that snapshot tests are better for this
    // as it's kind of busywork, but these are defintely easier to 
    // reason about/read.
    describe('wrapper tests', () => {
      it('renders the logo correctly', () => {
        expect(findByTestAttr(wrapper, 'logoImg').length).toBe(1);
      });

      it('renders the headerComponent correctly', () => {
        expect(findByTestAttr(wrapper, 'headerComponent').length).toBe(1);
      });
    });
  });
});
