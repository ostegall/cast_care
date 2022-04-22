import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import FAQ from '../pages/directoryPages/FAQ';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<FAQ />);
});

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<FAQ />).toJSON();
  expect(tree).toMatchSnapshot();
});