import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import SomethingInCast from '../pages/castIssuePages/SomethingInCast';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<SomethingInCast />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<SomethingInCast />).toJSON();
  expect(tree).toMatchSnapshot();
});