import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import Headline from './Headline';

const setUp = (props={}) => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
}

describe('Headline Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  });

  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Header',
        desc: 'Desc',
        tempArr: [{
          fName: 'fname',
          lName: 'lname',
          email: 'email',
          age: 15,
          onlineStatus: false
        }]
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  })

  describe.each([
    { props: { header: "headline", desc: "desc" }, expectedLength: 1 },
    { props: null, expectedLength: 0 }
  ])('renders correctly', (testCase) => {
    it(`headline component length is ${testCase.expectedLength} with props: ${JSON.stringify(testCase.props)}`, () => {
      wrapper.setProps(testCase.props);
      expect(findByTestAttr(wrapper, 'headlineComponent').length).toBe(testCase.expectedLength);
    });

    it(`header component length is ${testCase.expectedLength} with props: ${JSON.stringify(testCase.props)}`, () => {
      wrapper.setProps(testCase.props);
      expect(findByTestAttr(wrapper, 'header').length).toBe(testCase.expectedLength);
    });

    it(`desc component length is ${testCase.expectedLength} with props: ${JSON.stringify(testCase.props)}`, () => {
      wrapper.setProps(testCase.props);
      expect(findByTestAttr(wrapper, 'desc').length).toBe(testCase.expectedLength);
    });
  });
});
