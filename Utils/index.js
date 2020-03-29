import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers/index';
import { middlewares } from './../src/createStore';

export const checkProps = (component, expectedProps) => {
  const propsError =  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
};

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}