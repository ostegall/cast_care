import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import React from "react";

import Burning from '../pages/castIssuePages/Burning';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Burning />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Burning />).toJSON();
  expect(tree).toMatchSnapshot();
});