import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Swelling from '../pages/castIssuePages/Swelling';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Swelling />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Swelling />).toJSON();
  expect(tree).toMatchSnapshot();
});