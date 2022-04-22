import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import HomeScreen from '../pages/directoryPages/HomeScreen';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<HomeScreen />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});