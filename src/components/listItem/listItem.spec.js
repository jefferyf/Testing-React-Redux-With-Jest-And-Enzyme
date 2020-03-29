import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from './listItem';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'Title',
        desc: 'Desc'
      };
      const propsError = checkProps(ListItem , expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Snapshot Tests', () => {
    it('Should render correctly with title prop', () => {
      const wrapper = shallow(<ListItem />);
      wrapper.setProps({ title: 'Title', desc: 'Description' });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should not render with no title prop', () => {
      const wrapper = shallow(<ListItem />);
      wrapper.setProps({ desc: 'Description' });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Should render without error', () => {
    let wrapper,
        props;

    beforeEach(() => {
      props = {
        title: 'Title',
        desc: 'Description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render a listItem element', () => {
      expect(findByTestAttr(wrapper, 'listItemComponent').length).toBe(1);
    });

    it('Should render a title element', () => {
      expect(findByTestAttr(wrapper, 'title').length).toBe(1);
    });

    it('Should render a description element', () => {
      expect(findByTestAttr(wrapper, 'desc').length).toBe(1);
    });
  });
});