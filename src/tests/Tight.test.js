import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Tight from '../pages/castIssuePages/Tight';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Tight />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Tight />).toJSON();
  expect(tree).toMatchSnapshot();
});