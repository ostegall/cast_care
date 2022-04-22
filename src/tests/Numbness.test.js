import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Numbness from '../pages/castIssuePages/Numbness';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Numbness />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Numbness />).toJSON();
  expect(tree).toMatchSnapshot();
});