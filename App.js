import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Pressable, Linking, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from './src/styles.js'
import LandingPage from './src/pages/directoryPages/LandingPage.js';
import CastInfo from './src/pages/directoryPages/CastInfo.js';
import OpenScreen from './src/pages/directoryPages/OpenScreen.js';
import HomeScreen from './src/pages/directoryPages/HomeScreen.js'
import WorsePain from './src/pages/castIssuePages/WorsePain.js';
import Info from './src/pages/directoryPages/Info.js';
import UCInfo from './src/pages/location/UCInfo.js';
import EDInfo from './src/pages/location/EDInfo.js';
import Burning from './src/pages/castIssuePages/Burning.js';
import Swelling from './src/pages/castIssuePages/Swelling.js';
import NoMovement from './src/pages/castIssuePages/NoMovement.js';
import Numbness from './src/pages/castIssuePages/Numbness.js';
import Tight from './src/pages/castIssuePages/Tight.js';
import TightBlur from './src/pages/castIssuePages/imagePages/TightBlurImage.js';
import SomethingInCastBlur from './src/pages/castIssuePages/imagePages/SomethingInCastBlurImage.js';
import SoiledBlur from './src/pages/castIssuePages/imagePages/SoiledBlurImage.js';
import SmellsBlur from './src/pages/castIssuePages/imagePages/SmellsBlurImage.js';
import LooseBlur from './src/pages/castIssuePages/imagePages/LooseBlurImage.js';
import CastBreakingBlur from './src/pages/castIssuePages/imagePages/CastBreakingBlurImage.js';
import RashBlur from './src/pages/castIssuePages/imagePages/RashBlurImage.js';
import Loose from './src/pages/castIssuePages/Loose.js';
import Smells from './src/pages/castIssuePages/Smells.js';
import Rash from './src/pages/castIssuePages/Rash.js';
import Soiled from './src/pages/castIssuePages/Soiled.js';
import SomethingInCast from './src/pages/castIssuePages/SomethingInCast.js';
import CastBreaking from './src/pages/castIssuePages/CastBreaking.js';
import FAQ from './src/pages/directoryPages/FAQ.js';

const Stack = createStackNavigator();

export default function App() { //App Rendering page for different screens
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4292c7'
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen name="Landing Page" component={LandingPage}
          options={({ navigation }) => ({
            headerTitle: "Landing Page",
          })}
        />
        <Stack.Screen name="Cast Info" component={CastInfo}
          options={({ navigation }) => ({
            headerTitle: "Cast Care Instructions",
          })}
        />
        <Stack.Screen name="Open Screen" component={OpenScreen}
          options={({ navigation }) => ({
            headerTitle: "Liability Statement",
          })}
        />
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "Home",
            headerLeft: () => ( //Home page header button for finding the nearest hospital
              <Pressable
                onPress={() => navigation.navigate('Info')}
                style={styles.header_button}
              >
                <Icon type="feather" name='map' size={19} color='white' />
              </Pressable>
            ),
            headerRight: () => ( //Home page header button for contact information
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Worse Pain" component={WorsePain}
          options={({ navigation }) => ({
            headerTitle: "Worsening Pain",
            headerRight: () => ( //Keeps page on finding nearest hospital in header on all solving cast issue(s) pages
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Numbness" component={Numbness}
          options={({ navigation }) => ({
            headerTitle: "Numbness",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="No Movement" component={NoMovement}
          options={({ navigation }) => ({
            headerTitle: "No Movement",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Swelling" component={Swelling}
          options={({ navigation }) => ({
            headerTitle: "Swelling",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Burning" component={Burning}
          options={({ navigation }) => ({
            headerTitle: "Burning",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Cast Breaking" component={CastBreaking}
          options={({ navigation }) => ({
            headerTitle: "Cast Breaking",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Loose" component={Loose}
          options={({ navigation }) => ({
            headerTitle: "Loose",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Rash" component={Rash}
          options={({ navigation }) => ({
            headerTitle: "Rash",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Tight" component={Tight}
          options={({ navigation }) => ({
            headerTitle: "Tight",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Smells" component={Smells}
          options={({ navigation }) => ({
            headerTitle: "Smells",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Soiled" component={Soiled}
          options={({ navigation }) => ({
            headerTitle: "Soiled",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Something In Cast" component={SomethingInCast}
          options={({ navigation }) => ({
            headerTitle: "Something In Cast",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Tight Blur" component={TightBlur}
          options={({ navigation }) => ({
            headerTitle: "Tight Image",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Something In Cast Blur" component={SomethingInCastBlur}
          options={({ navigation }) => ({
            headerTitle: "Something in Cast",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Soiled Blur" component={SoiledBlur}
          options={({ navigation }) => ({
            headerTitle: "Soiled Image",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Smells Blur" component={SmellsBlur}
          options={({ navigation }) => ({
            headerTitle: "Smelly Cast Image",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Rash Blur" component={RashBlur}
          options={({ navigation }) => ({
            headerTitle: "Image of Rash",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Loose Blur" component={LooseBlur}
          options={({ navigation }) => ({
            headerTitle: "Loose Cast Image",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Cast Breaking Blur" component={CastBreakingBlur}
          options={({ navigation }) => ({
            headerTitle: "Breaking Cast Image",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('FAQ')}
                style={styles.header_button}
              >
                <Icon type="feather" name='help-circle' size={19} color='white' />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Info" component={Info}
          options={({ navigation }) => ({
            headerTitle: "Nearest Hospital",
          })}
        />
        <Stack.Screen name="UCInfo" component={UCInfo}
          options={({ navigation }) => ({
            headerTitle: "Find Urgent Care",
          })}
        />
        <Stack.Screen name="EDInfo" component={EDInfo}
          options={({ navigation }) => ({
            headerTitle: "Find Emergency Department",
          })}
        />
        <Stack.Screen name="FAQ" component={FAQ}
          options={({ navigation }) => ({
            headerTitle: "FAQ and About",
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}