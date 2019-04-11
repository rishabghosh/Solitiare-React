import React from "react";
import Tableau from "../main/views/Tableau";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<Tableau {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, value) {
  return wrapper.find(`[data-test='${value}']`);
};

/* ======= Tests ======== */

test("renders Tableau without crashing", () => {
  const wrapper = setUp();
  const tableauComponent = findByTestAttribute(wrapper, "component-tableau");
  expect(tableauComponent.length).toBe(1);
});

test("tableau should have 7 pile bases", () => {
  const wrapper = setUp();
  const pileBaseComponent = findByTestAttribute(wrapper, "component-pile-base");
  expect(pileBaseComponent.length).toBe(7);
});
