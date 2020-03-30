import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByTestAttr, testStore } from './../Utils';
import App from './App';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [{
        title: "title 1",
        body: "body"
      },
      {
        title: "title 2",
        body: "body"
      },
      {
        title: "title 3",
        body: "body"
      }]
    }
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    expect(findByTestAttr(wrapper, 'appComponent').length).toBe(1);
  });
});