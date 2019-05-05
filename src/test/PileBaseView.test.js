import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import PileBaseView from "../main/components/PileBaseView";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<PileBaseView {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, value) {
  return wrapper.find(`[data-test='${value}']`);
};

test("renders pile base without crashing", () => {
  const wrapper = setUp();
});

test("should display base when there is no card in the pile", () => {
  const wrapper = setUp();
  
});
