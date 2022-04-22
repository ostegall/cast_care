import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Info from '../pages/directoryPages/Info';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<Info />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<Info />).toJSON();
  expect(tree).toMatchSnapshot();
});