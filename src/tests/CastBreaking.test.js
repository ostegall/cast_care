import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import CastBreaking from '../pages/castIssuePages/CastBreaking';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<CastBreaking />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<CastBreaking />).toJSON();
  expect(tree).toMatchSnapshot();
});