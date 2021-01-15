import React from "react";
import { shallow } from "enzyme";
import Title from ".";

describe("<Title />", () => {
  it("should match snapshot", () => {
    const actual = <Title title="The Weather App" />;
    expect(actual).toMatchSnapshot();
  });
});

describe("render a text", () => {
  it("should render app title", () => {
    const wrapper = shallow(<Title title="The Weather App"/>);
    const text = wrapper.text();
    expect(text).toBe("The Weather App");

  });
})


