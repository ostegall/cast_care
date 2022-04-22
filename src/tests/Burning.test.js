import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import React from "react";
import Pressable from 'react-native';
import { render, cleanup } from "react-dom";
import { act } from "react-dom/test-utils";

import Burning from '../pages/castIssuePages/Burning';

// afterEach(cleanup);

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Burning />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Burning />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it("can press the button", () => {
  
//   const onPressMock = jest.fn();
  
//   const button = mount((<Burning />));
//   button.find('button').simulate('click');
//   expect(onPressMock).toHaveBeenCalled();
//   expect(onPressMock.mock.calls.length).toEqual(1);
// });

// it("renders all text", () => {
//     const wrapper = shallow(<Burning />);
//     expect(wrapper.find(<Text />))
//   });