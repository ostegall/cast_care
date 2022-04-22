import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import OpenScreen from '../pages/directoryPages/OpenScreen';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<OpenScreen />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<OpenScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});