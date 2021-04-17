export const findByTestAtrr = (component, attr) => {
  console.log(component);
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
