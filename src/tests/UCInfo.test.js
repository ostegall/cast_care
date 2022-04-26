import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import UCInfo from '../pages/location/UCInfo'

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<UCInfo />);
});

it('renders correctly', () => {
    const tree = renderer.create(<UCInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });