import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import LandingPage from '../pages/directoryPages/LandingPage';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<LandingPage />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});