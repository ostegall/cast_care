import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Rash from '../pages/castIssuePages/Rash';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Rash />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Rash />).toJSON();
  expect(tree).toMatchSnapshot();
});