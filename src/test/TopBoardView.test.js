import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import TopBoardView from "../main/components/TopBoardView ";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<TopBoardView {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, value) {
  return wrapper.find(`[data-test='${value}']`);
};

/* ========== Tests =========== */

test("renders top container", () => {
  const wrapper = setUp();
  const topBoardComponent = findByTestAttribute(wrapper, "component-top-board");
  expect(topBoardComponent.length).toBe(1);
});

test("renders app component without crashing", () => {
  const wrapper = setUp();
  const DisplayLeft = findByTestAttribute(wrapper, "display-left");
  expect(DisplayLeft.length).toBe(1);
});

test("renders app component without crashing", () => {
  const wrapper = setUp();
  const displayRight = findByTestAttribute(wrapper, "display-right");
  expect(displayRight.length).toBe(1);
});
