import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./Counter";
import renderer from 'react-test-renderer'

configure({
  adapter: new Adapter(),
});

describe("Counter Component", () => {

  it('match the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot();
  });
  
  it("starts with a count of 0", () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    // console.log(wrapper.debug());
    expect(text).toEqual("Current count: 0");
  });

  it('can increment the count when Increment button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const IncrementBtn = wrapper.find('button.increment');
    IncrementBtn.simulate('onClick');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 0');
  })

  it('can decrement the count when Decrementbuton is clicked', () => {
    const wrapper = shallow(<Counter />);
    const DecrementBtn = wrapper.find('button.decrement');
    DecrementBtn.simulate('onClick');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 0')
  })

  it('should render Number of buttons in tree/Counter Componnt', () => {
    const wrapper = shallow(<Counter />);
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
  })
});
