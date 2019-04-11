import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import TopBoard from "../main/views/TopBoard";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<TopBoard {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, value) {
  return wrapper.find(`[data-test='${value}']`);
};

test("renders top container", () => {
  const wrapper = setUp();
  const topDisplay = findByTestAttribute(wrapper, "component-top-board");
  expect(topDisplay.length).toBe(1);
});

test("renders app component without crashing", () => {
  const wrapper = setUp();
  const topLeftDisplay = findByTestAttribute(wrapper, "display-left");
  expect(topLeftDisplay.length).toBe(1);
});

test("renders app component without crashing", () => {
  const wrapper = setUp();
  const topRightDisplay = findByTestAttribute(wrapper, "display-right");
  expect(topRightDisplay.length).toBe(1);
});
