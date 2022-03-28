import { StatusBar } from 'expo-status-bar';
//import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, Text, View, Pressable, StyleSheet, Alert, TouchableOpacity, Linking } from 'react-native';
//import GetLocation from 'react-native-get-location'
import * as Location from 'expo-location';
import createPerformanceLogger from 'react-native/Libraries/Utilities/createPerformanceLogger';

const url = "https://www.myuncchart.org/myChart/Authentication/Login";
const Stack = createStackNavigator();

function LandingPage({navigation}) { //Opening Page for user to choose between looking at general cast upkeep or diagnosin & solving cast issues
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Cast Info'); //navigates to page to look at general cast upkeep
            }}>
        <Text style={styles.text}>
            Click here to read general cast upkeep information
        </Text>
      </Pressable>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Open Screen'); //navigates to page to diagnose and solve cast issues
            }}>
        <Text style={styles.text}>
            Click here to diagnose and solve cast issues
        </Text>
      </Pressable>      
    </View>
  )
}

function CastInfo({navigation}) { //Page with general cast upkeep
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>
        {'\u2022'} {/* code for a bullet point */}
          <Text style={styles.page_text}>
            Keep cast clean and dry
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            Do not stick anything inside of cast or splint
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            If cast/splint becomes itchy: blow dry on low cool air, tap, or itch other side
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            Elevate above the level of patient's heart
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            It is normal to have increased pain right after a cast/splint is put on due to moving the fracture
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            Patient can ice through the cast/splint by using a gel ice pack or making sure the condensation from the ice bag does not get on the cast/splint; some people may or may not be able to feel the ice
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            No powders or lotions down cast/splint
          </Text>
      </Text>
      <Text>
        {'\u2022'}
          <Text style={styles.page_text}>
            Wiggle fingers as much as possible
          </Text>
      </Text>
    </View>
  )
}

function OpenScreen({navigation}) { //Liability Page for user to accept to reduce client's liability for injuries/nonaction
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.page_text}>
          *Insert Liability Statement Here*
      </Text>
      <Text>
          Please Accept to Continue
      </Text>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Home'); //navigates to screen for diagnosing cast issue(s)
            }}>
        <Text style={styles.text}>
            Accept
        </Text>
      </Pressable>    
    </View>
  )
}

function HomeScreen({navigation}) { //Screen where user can select which cast issue(s) they are dealing with
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Worse Pain');
              }}>
              <Text style={styles.text}>Worsening Pain?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Numbness');
              }}>
              <Text style={styles.text}>Feeling Numb?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Soiled');
              }}>
              <Text style={styles.text}>Soiled or Wet?</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('No Movement');
              }}>
              <Text style={styles.text}>No Movement?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Swelling');
              }}>
              <Text style={styles.text}>Swelling?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Burning');
              }}>
              <Text style={styles.text}>Burning?</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Tight');
              }}>
              <Text style={styles.text}>Feel Too Tight?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Loose');
              }}>
              <Text style={styles.text}>Feel Too Loose?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Smells');
              }}>
              <Text style={styles.text}>Smells Bad?</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Rash');
              }}>
              <Text style={styles.text}>Rash or Itching?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Something In Cast');
              }}>
              <Text style={styles.text}>Something In Cast?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Cast Breaking');
              }}>
              <Text style={styles.text}>Cast Breaking?</Text>
            </Pressable>
          </View>
      </View>
    );
}

function WorsePain ({navigation}) { //Solutions for user that has worsening pain in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Has patient had increased pain since cast/splint was put on?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            If pain is disproportionate to what it was prior to putting on the cast/splint, could mean that the fracture shifted or there is something wrong with the cast/splint.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Some increased pain is normal to feel, as there is some movement when we were casting/splinting you. Pain should subside in a couple of hours.
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Follow-up with the office by calling 984-974-5700 to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
      )
}

function Burning({navigation}) { //Solutions for user that has burning in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is there a burning sensation under the cast/splint in a certain area? 
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that there is an area of rubbing putting pressure on patient's skin. If left untreated, it could lead to skin breakdown and possible infection.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It would be best to be assessed in the office to address this problem. Check patient's skin and make sure there is no signs of skin breakdown.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Follow-up with the office by calling 984-974-5700 to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
      )
}

function Swelling({navigation}) { //Solutions for user that has swelling in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Has patient had increased swelling near or around their cast/splint since having it applied?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that the cast/splint is too tight and restricting circulation to the extremity.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to address this quickly as there are other problems that could result if left untreated.
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
  )
}

function NoMovement({navigation}) { //Solutions for user that has no movement in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            No movement of extremity since the cast/splint has been put on. For example: A cast on patient's wrist where they are unable to move fingers.
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            FILL IN HERE
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            FILL IN HERE
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
  )
}

function Numbness({navigation}) { //Solutions for user that has numbness in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Are there any areas of numbness? Does patient's limb have a sleepy feeling or pins and needles that is not alleviated by elevation?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            If there is numbness, this could indicate that the cast/splint is pinching or rubbing on a nerve, and it needs to be addressed.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Elevate the extremity to see if the numbness goes away. If the numbness does not go away, schedule an appointment.
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Follow-up with the office by calling 984-974-5700 to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
    )
}

function Tight({navigation}) { //Solutions for user that has a tight cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            There should be room enough for 2 fingers to slide between patient's cast and patient's skin. If there is not enough and the cast is too tight or if there is not enough room between the cast/splint and patient's skin, it could restrict motion.
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            If the cast is too tight, it could cut off circulation and cause other issues. It is important it is not too tight, elevate extremity 6-8 hours and anytime it is throbbing.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Make sure fingers/toes are not white, swollen, shiny or do not blanch after elevation. If they do, schedule an appointment.
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Follow-up with the office by calling 984-974-5700 to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
      )
}

function Loose({navigation}) { //Solutions for user that has loose cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            There will be a little bit of wiggle room in the cast, anything beyond 2 fingers between patient's cast and patient's skin is too much.
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that the cast/splint is no longer supporting the fracture.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to have a proper fitting cast to assist the healing process.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Schedule an appointment in the next 2 business days by calling 984-974-5700. Special consideration: If patient's cast is likely to come off soon, you need to be seen on the same day or come into the Orthonow walk-in clinic.          
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
      )
}

function Smells({navigation}) { //Solutions for user that has smelly cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is there a bad smell coming from patient's cast without a known underlying issue?          
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that there is an infection underneath the cast/splint. Special considerations: This is normal if patient has known wound concerns, known diabetic ulcers, or bowel/bladder incontinence.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is normal to have a smelly cast due to normal body odor related smells. If the smell is too bad it could indicate there is something else going on. When in doubt, get it checked out.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Follow-up with the office by calling 984-974-5700 to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.text}>
              Find your nearest location
            </Text>
          </Pressable>
          </View>
        </View>
      )
}

function Rash({navigation}) { //Solutions for user that has a rash in their cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is there a rash or itch inside of patient's cast?          
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate an allergic reaction. However, it is normal to have some itching underneath the cast.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Never put anything inside of patient's cast/splint. Try tapping the outside of patient's cast/splint. Use a blow dryer with low/cool air or itching another extremity to distract from itching.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            If symptoms do not get better, patient needs to come into clinic the same day or next day for evaluation. Please call 984-974-5700 to schedule an appointment.          
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.text}>
              Find your nearest location
            </Text>
          </Pressable>
          </View>
        </View>
      )
}

function Soiled({navigation}) { //Solutions for user that has soiled cast
    return (
      <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is patient's cast wet or soiled? Has the patient gotten their cast/splint saturated?          
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            A wet or soiled cast can lead to skin breakdown and maceration of the skin which can lead to infections if not treated.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Dry with a hairdryer (which can take a while) if patient is able to. If patient's cast is still saturated, schedule an appointment. Special considerations: Soiling is common for spica casts, scoliosis, or clubfoot casts.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            If patient's cast is completely saturated: send a picture via 
              <Text style={styles.url_text} //separate text box for an inline link to the UNC MyChart Authentication website
                onPress={() => Linking.openURL(url)}>
                MyChart
              </Text>  
            . The patient needs to make an appointment within 24 hours. If patient's cast is soiled, clean as well as possible and schedule an appointment wihtin the next three days.      
          </Text>
        <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.text}>
              Find your nearest location
            </Text>
          </Pressable>
        </View>
      </View>
    )
}

function SomethingInCast({navigation}) { //Solutions for user that has something in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Did something fall inside the cast? Did something get stuck inside of the cast and the patient cannot get it out?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could lead to a pressure sore and skin breakdown. 
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to return to the clinic to be assessed and take the cast off for further assessment. 
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Patient needs to come in the same day or next day to be evaluated. To do so, please call 978-974-5700 or go to UNC Orthonow.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.text}>
              Find your nearest location
            </Text>
          </Pressable>
          </View>
        </View>
    )
}

function CastBreaking({navigation}) { //Solutions for user that has a breaking/broken cast
    return (
        <View style={{flex: 1, paddingTop: 150}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is patient's cast breaking or soft in certain places?          
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate the cast is not thick enough to support patient's fracture.         
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to be assessed to get another cast put on to properly support the fracture.          
          </Text>
          <Text style={styles.header_text}>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Patient needs to come into clinic the same day or next day for evaluation. To do so, please call 984-974-5700 to schedule an appointment.
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info") //Navigates to page for finding nearest hospital
              }}
            >
              <Text style={styles.text}>
                Find your nearest location
              </Text>
            </Pressable>
          </View>
        </View>
      )
}

function Distance(userLat, userLon, locationLat, locationLon) { //Helper function to calculate distance between user location and hospital location
  return Math.abs(locationLat - userLat) + Math.abs(locationLon - userLon);
}

function Info({navigation}) { //Page for determining which type of hospital user would like to find nearest to them
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>  
      <Text styles={styles.page_text}>
        Select which type of location you want to find
      </Text>
      <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("UCInfo") //Navigates to Urgent Care Page
            }}
      >
        <Text style={styles.text}>
          Urgent Care
        </Text>
      </Pressable>
      <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("EDInfo") //Navigates to Emergency Department Page
            }}
      >
        <Text style={styles.text}>
          Emergency Department
        </Text>
      </Pressable>
    </View>
  )
}

function UCInfo({navigation}) { //Helper function to calculate which of the two hard-coded Urgent Cares is closest
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    let latitude = '';
    let longitude = '';
    if (errorMsg) {
      latitude = errorMsg;
    } else if (location) {
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
    }

    const latNum = latitude * 1;
    const lonNum = longitude * 1;

    let uncHospLat = 35.910970;
    let uncHospLon = -78.982520;

    let pantherCreekLat = 35.828970;
    let pantherCreekLon = -78.878230;

    let hospital = '';
    if (Distance(latNum, lonNum, uncHospLat, uncHospLon) > Distance(latNum, lonNum, pantherCreekLat, pantherCreekLon)) {
      hospital = 'UNC Ortho at Panther Creek';
    } else {
      hospital = 'UNC Hospitals';
    }
  
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.page_text}>
                Your nearest Urgent Care is {hospital}
              </Text>
        </View>
      )
}

function EDInfo({navigation}) { //Helper function to calculate which of the four hard-coded Emergency Departments is closest
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let latitude = '';
  let longitude = '';
  if (errorMsg) {
    latitude = errorMsg;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  const latNum = latitude*1;
  const lonNum = longitude*1;

  let chathamLat = 35.722990;
  let chathamLon = -79.420980;

  let rexLat = 35.815500;
  let rexLon = -78.705030;

  let hillsboroLat = 36.037240;
  let hillsboroLon = -79.091350;

  let uncLat = 35.903660;
  let uncLon = -79.052231;

  let hosp1Lat = 0;
  let hosp1Lon = 0;
  let hosp2Lat = 0;
  let hosp2Lon = 0;

  let hospital1 = '';
  let hospital2 = '';
  let hospital = '';

  if (Distance(latNum, lonNum, chathamLat, chathamLon) < Distance(latNum, lonNum, rexLat, rexLon)) {
    hosp1Lat = chathamLat;
    hosp1Lon = chathamLon;
    hospital1 = "Chatham";
  } else {
    hosp1Lat = rexLat;
    hosp1Lon = rexLon
    hospital1 = "Rex";
  } 

  if (Distance(latNum, lonNum, hillsboroLat, hillsboroLon) < Distance(latNum, lonNum, uncLat, uncLon)) {
    hosp2Lat = hillsboroLat;
    hosp2Lon = hillsboroLon;
    hospital2 = "Hillsboro";
  } else {
    hosp2Lat = uncLat;
    hosp2Lon = uncLon
    hospital2 = "UNC";
  } 

  if (Distance(latNum, lonNum, hosp1Lat, hosp1Lon) < Distance(latNum, lonNum, hosp2Lat, hosp2Lon)) {
    hospital = hospital1;
  } else {
    hospital = hospital2;
  } 

  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.page_text}>
              Your nearest emergency department is {hospital}
            </Text>
      </View>
    )
}

function Contact({navigation}) { //Page for contacting UNC Healthcare
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>    
          <Text style={styles.page_text}>
            Contact Info
          </Text>
        </View>
      )
}

export default function App() { //App Rendering page for different screens
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4B9CD3'
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
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Info
                </Text>
            </Pressable>
          ),
          headerRight: () => ( //Home page header button for contact information
              <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
              >
                <Text style={styles.text}>
                    Contact
                </Text>
              </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Worse Pain" component={WorsePain} 
        options={({ navigation }) => ({
          headerTitle: "Worsening Pain",
          headerRight: () => ( //Keeps page on finding nearest hospital in header on all solving cast issue(s) pages
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Numbness" component={Numbness} 
        options={({ navigation }) => ({
          headerTitle: "Numbness",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="No Movement" component={NoMovement} 
        options={({ navigation }) => ({
          headerTitle: "No Movement",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Swelling" component={Swelling} 
        options={({ navigation }) => ({
          headerTitle: "Swelling",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Burning" component={Burning} 
        options={({ navigation }) => ({
          headerTitle: "Burning",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Cast Breaking" component={CastBreaking} 
        options={({ navigation }) => ({
          headerTitle: "Cast Breaking",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Loose" component={Loose} 
        options={({ navigation }) => ({
          headerTitle: "Loose",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Rash" component={Rash} 
        options={({ navigation }) => ({
          headerTitle: "Rash",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Tight" component={Tight} 
        options={({ navigation }) => ({
          headerTitle: "Tight",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Smells" component={Smells} 
        options={({ navigation }) => ({
          headerTitle: "Smells",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Soiled" component={Soiled} 
        options={({ navigation }) => ({
          headerTitle: "Soiled",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Contact
                </Text>
            </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Something In Cast" component={SomethingInCast} 
        options={({ navigation }) => ({
          headerTitle: "Something In Cast",
          headerRight: () => (
              <Pressable
              onPress={() => navigation.navigate('Contact')}
              style= {styles.header_button}
              >
                <Text style={styles.text}>
                    Contact
                </Text>
              </Pressable>
          ),
      })}    
        />
        <Stack.Screen name="Info" component={Info} 
        options={({ navigation }) => ({
          headerTitle: "Info",
      })}    
        />
        <Stack.Screen name="UCInfo" component={UCInfo} 
        options={({ navigation }) => ({
          headerTitle: "Urgent Care Info",
      })}    
        />
        <Stack.Screen name="EDInfo" component={EDInfo} 
        options={({ navigation }) => ({
          headerTitle: "Emergency Department Info",
      })}    
        />
        <Stack.Screen name="Contact" component={Contact} 
        options={({ navigation }) => ({
          headerTitle: "Contact",
      })}    
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ //different CSS styling for buttons and text
    home_button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      width: 115,
      borderWidth: 2,
      backgroundColor: 'black',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      width: 200,
      backgroundColor: 'black',
    },
    header_button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#4B9CD3',
    },
    header_text: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing:  0.5,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
      letterSpacing: 0.25,
      color: 'white',
    },
    page_text: {
        fontSize: 14,
        letterSpacing:  0.5,
    },
    url_text: {
      fontSize: 14,
      textAlign: 'center',
      letterSpacing:  0.5,
      color: "blue",
  },
  });
