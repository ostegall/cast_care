import React from "react";
import Login from "./screens/Authentication/Login";
import Signup from "./screens/Authentication/Signup";
import SwitchNavigator from "./navigation/SwitchNavigator";

export default class App extends React.Component {
  render() {
    return <SwitchNavigator />;
  }
}
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View} from 'react-native';
// // import 'react-native-gesture-handler';
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screens/HomeScreen';
// import Selection1 from './src/screens/WorsePainNumbness';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Text>
//       Test
//     </Text>
    // <NavigationContainer>
    //   <Stack.Navigator
    //       screenOptions={{
    //         headerStyle: {
    //           backgroundColor: '#4B9CD3'
    //         },
    //             headerTintColor: '#fff'
    //         }} 
    //       initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="S1" component={Selection1} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  // );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
