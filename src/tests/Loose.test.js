import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Loose from '../pages/castIssuePages/Loose';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Loose />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Loose />).toJSON();
  expect(tree).toMatchSnapshot();
});