import React from "react";
import { shallow } from "enzyme";
import { Quote } from "../Quote";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Quote debug />);

    expect(component).toMatchSnapshot();
  });
});
