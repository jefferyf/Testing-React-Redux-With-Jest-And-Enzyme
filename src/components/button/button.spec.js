import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr, checkProps } from '../../../Utils';
import SharedButton from './button';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Button Text',
        emitEvent: () => {

        }
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Snapshot Tests', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<SharedButton />);
      wrapper.setProps({ buttonText: 'Press Me'});
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Renders', () => {
    let wrapper,
        props;

    beforeEach(() => {
      props = {
        buttonText: 'Button Text',
        emitEvent: jest.fn()
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      expect(findByTestAttr(wrapper, 'buttonComponent').length).toBe(1);
    });

    it('should call the emit event when clicked', () => {
      findByTestAttr(wrapper, 'buttonComponent').simulate('click');
      expect(props.emitEvent).toHaveBeenCalled();
    });
  });
});