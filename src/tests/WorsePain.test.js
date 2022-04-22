import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import WorsePain from '../pages/castIssuePages/WorsePain';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<WorsePain />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<WorsePain />).toJSON();
  expect(tree).toMatchSnapshot();
});