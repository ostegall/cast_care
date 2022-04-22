import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import CastInfo from '../pages/directoryPages/CastInfo';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<CastInfo />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<CastInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});