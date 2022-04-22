import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Soiled from '../pages/castIssuePages/Soiled';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Soiled />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Soiled />).toJSON();
  expect(tree).toMatchSnapshot();
});