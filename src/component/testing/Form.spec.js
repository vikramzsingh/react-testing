import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";

configure({
  adapter: new Adapter(),
});

describe("Form Component", () => {
  it("Should test Form value", () => {
    const wrapper = shallow(<Form />);
    const title = wrapper.find("input.input2");
    expect(title.props().value).toEqual("Testing form value");
    expect(title.props().name).toEqual("title");
  });

});
