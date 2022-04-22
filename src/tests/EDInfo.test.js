import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import EDInfo from '../pages/location/EDInfo'

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<EDInfo />);
});

it('renders correctly', () => {
    const tree = renderer.create(<EDInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

//ED and UC tests for correct closest hospital