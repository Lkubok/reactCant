import { Cant } from "../Cant";
import { shallow } from "enzyme";
import React from "react";

let props;

describe("Cant Component", () => {
  beforeEach(() => {
    props = {
      changeProfileSlope: jest.fn(),
      changeOffsetValue: jest.fn(),
      fullSuperSlope: 123,
      laneOffsetValue: 1234
    };
  });
  it("should mount", () => {
    const wrapper = shallow(<Cant {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  /*   it("Trigger handle Profile Slope when handling event", () => {
    const wrapper = shallow(<Cant {...props} />);
    const testObj = {
      target: {
        name: "mainSlope",
        value: 2
      }
    };
    wrapper.instance().handleOnChange(testObj);
    expect(props.changeProfileSlope).toHaveBeenCalledTimes(1);
    expect(props.changeProfileSlope).toHaveBeenCalledWith(2);
    expect(props.changeOffsetValue).not.toHaveBeenCalled();
  }); */
  it("Render input LaneOffset value with value from props", () => {
    const wrapper = shallow(<Cant {...props} />);
    expect(wrapper.find("#laneOffset").length).toEqual(1);
    expect(wrapper.find("#laneOffset").props().value).toEqual(1234);
  });
  it("Onchange on input should trigger hadleChange", () => {
    const wrapper = shallow(<Cant {...props} />);
    const fancySpy = jest.fn();
    const event = {
      target: {
        name: "laneOffsetValue",
        value: 2
      }
    };
    wrapper.instance().handleOnChange = fancySpy;
    wrapper.update();
    wrapper.find("#laneOffset").simulate("change", event);
    expect(fancySpy).toHaveBeenCalled();
    // expect(true).toBe(true);
  });
});

// if (name === "mainSlope") this.props.changeProfileSlope(value);
