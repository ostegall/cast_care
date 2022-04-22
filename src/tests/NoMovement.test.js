import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import NoMovement from '../pages/castIssuePages/NoMovement';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<NoMovement />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<NoMovement />).toJSON();
  expect(tree).toMatchSnapshot();
});