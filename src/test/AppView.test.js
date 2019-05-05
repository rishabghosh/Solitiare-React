import React from "react";
import AppView from "../main/components/AppView";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<AppView {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, value) {
  return wrapper.find(`[data-test='${value}']`);
};

test("renders app component without crashing", () => {
  const wrapper = setUp();
  const appComponent = findByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});


