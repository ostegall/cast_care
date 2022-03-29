import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { shallow } from 'enzyme'

import App from '../../App';

//Makes sure app component renders correctly without crashing
it("renders without crashing", () => {
  shallow(<App />);
});

// Would test this if had more time
// it("renders stack Navigator", () => {
//   const wrapper = shallow(<App />);
//   const Stack = createStackNavigator();
//   const navigator = <Stack.Navigator></Stack.Navigator>;
//   expect(wrapper.contains(navigator)).toEqual(true);
// });

//Snapshot test to ensure UI stays consistent
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

//ED and UC tests for correct closest hospital
//coordinate tests for data return depending on user response
//snapshot test for each individual page