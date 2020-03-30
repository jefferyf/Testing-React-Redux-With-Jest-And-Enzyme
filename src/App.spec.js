import React from 'react';
import { shallow } from 'enzyme';
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

  it('exampleMethod_udpatesState method should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_udpatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('exampleMethod_returnsAValue method should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newNum = classInstance.exampleMethod_returnsAValue(1);
    expect(newNum).toBe(2);
  });
});