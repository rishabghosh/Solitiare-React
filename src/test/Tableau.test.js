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

test("renders Tableau without crashing", () => {
  const wrapper = setUp();
  const TableauComponent = findByTestAttribute(
    wrapper,
    "bottom-container-display"
  );
  expect(TableauComponent.length).toBe(1);
});
