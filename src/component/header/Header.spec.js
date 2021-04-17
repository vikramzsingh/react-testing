import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/index";
import Header from "./index"; // Import Header component from index file
configure({
  adapter: new Adapter(),
});

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  // describes the test i'm writing
  it("should render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(`[data-test="headerComponent"]`);
    expect(wrapper.length).toBe(1);
  });

  it("should render p tag", () => {
    // const component = setUp();
    const paragraph = findByTestAtrr(component, "paragraph"); //component.find(`[data-test="paragraph"]`);
    expect(paragraph.length).toBe(1);
  });

});
