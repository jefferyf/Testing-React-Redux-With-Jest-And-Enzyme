import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectedProps) => {
  const propsError =  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
};

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};