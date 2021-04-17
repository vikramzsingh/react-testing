import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Headline from "./Headline";
import checkPropTypes from "check-prop-types";

configure({
  adapter: new Adapter(),
});

describe("Headline Component", () => {
  describe("Have props", () => {
    const props = {
      header: "Test Header",
      decs: "Test Desc",
    };

    it("should render without error!", () => {
      const component = shallow(<Headline {...props} />);
      const wrapper = component.find(`[data-test="headerComponent"]`);
      expect(wrapper.length).toBe(1);
    });

    it("Should render a H1", () => {
      const component = shallow(<Headline {...props} />);
      const h1 = component.find(`[data-test="header"]`);
      console.log(h1);
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const component = shallow(<Headline {...props} />);
      const desc = component.find(`[data-test='desc']`);
      expect(desc.length).toBe(1);
    });
    
  });

  // Test case for Have No props
  describe("Have NO props", () => {
    it(" should not render!", () => {
      const component = shallow(<Headline />);
      const notRender = component.find(`[data-test='headerComponent']`);
      expect(notRender.length).toBe(0);
    });
  });

  // Testing Proptypes
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "Test email",
            age: 23,
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkPropTypes(
        Headline.propTypes,
        expectedProps,
        "props",
        Headline.name
      );
      console.log(Headline.name);
      expect(propsErr).toBeUndefined();
    });
  });
});
