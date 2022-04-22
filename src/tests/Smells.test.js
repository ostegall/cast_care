import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Smells from '../pages/castIssuePages/Smells';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Smells />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Smells />).toJSON();
  expect(tree).toMatchSnapshot();
});