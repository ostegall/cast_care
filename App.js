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

function LandingPage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Cast Info');
            }}>
        <Text style={styles.text}>
            Click here to read general cast upkeep information
        </Text>
      </Pressable>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Open Screen');
            }}>
        <Text style={styles.text}>
            Click here to diagnose and solve cast issues
        </Text>
      </Pressable>      
    </View>
  )
}
/*

*/
function CastInfo({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>
        {'\u2022'}
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
            Elevate above the level of your heart
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
            You can ice through the cast/splint by using a gel ice pack or making sure the condensation from the ice bag does not get on the cast/splint – some people may or may not be able to feel the ice
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
            Wiggle fingers as much as you can
          </Text>
      </Text>
    </View>
  )
}

function OpenScreen({navigation}) {
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
                navigation.navigate('Home');
            }}>
        <Text style={styles.text}>
            Accept
        </Text>
      </Pressable>    
    </View>
  )
}
//<Text style={styles.text}>Worsening pain; Numbness; Burning; Severe swelling; No movement?</Text>
function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Worse Pain/Numbness');
              }}>
              <Text style={styles.text}>Severe symptoms?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Pain');
              }}>
              <Text style={styles.text}>Pain?</Text>
            </Pressable>
            <Pressable style={styles.home_button} 
              onPress = {() => {
                  navigation.navigate('Tight');
              }}>
              <Text style={styles.text}>Feel Too Tight?</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
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

function WorsePain ({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              If you are feeling worsening pain, numbness, burning, severe swelling, or have no movement capabilities, this is an emergency.
            </Text>
          </Text>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              Get this issue resolved today, whether at any provider in the same division, OrthoNow, or ED.
            </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info")
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

function Pain({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              If there is pain at the edges of your cast, bend it back with plyers
            </Text>
          </Text>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              If there is sharp pain because of your cast, smooth it down with an emery board or sandpaper. You can also use small moleskin or tape to cover the edge of your cast.
            </Text>
          </Text>
          <Text>
            {'\u2022'}
              <Text style={styles.page_text}>
                If you cannot easily relieve your pain, you need to solve this issue today by going to any provider in the same division, OrthoNow, or ED.
              </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function Tight({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            Elevate the extremity with the cast above the heart for 6-8 hours and anytime the extremity is throbbing.
          </Text>
          </Text>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If fingers or toes are white, swollen, or shiny, do NOT blanch after elevation; this is an emergency that needs to be solved today by going to any provider in the same division, OrthoNow, or ED.
          </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function Loose({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            Schedule an appointment in the next two days to resolve this issue.
          </Text>
          </Text>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If the cast is likely to come off soon, you should come in today.
          </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function Smells({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            This is a normal occurence if you have pre-existing conditions like wounds, diabetic ulcers, or bladder/bowel incontinence.
          </Text>
          </Text>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If there are no pre-existing conditions, you need to solve this today by going to any provider in the same division, OrthoNow, or ED.
          </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function Rash({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If your cast is itching, NEVER out anything inside of the cast.
          </Text>
          </Text>
          <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            To fix any rash/itching issues, you should make an appointment for today or the next day at any provider, Orthonow, or ED for evaluation.
          </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function Soiled({navigation}) {
    return (
      <View style={{flex: 1, paddingTop: 200}}>
        <Text>
          {'\u2022'}
          <Text style={styles.page_text}>
            A soiled cast is a common occurence when pre-existing conditions like spica or scoliosis are present. It is also common in clubfoot casts.
          </Text>
        </Text>
        <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If the cast is wet, dry it well with a hairdyer for a few hours. Do NOT use powder or a perfumed product when the cast is wet.
          </Text>
        </Text>
        <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            If the cast is completely saturated (i.e. jumping into a pool with no cast cover), it needs to be changed within 24 hours at any provider, Orthonow, or ED.
            Furthermore, if the cast is completely saturated, please add a photo to your MyChart account here:   
            <Text style={styles.url_text}
              onPress={() => Linking.openURL(url)}>
              MyChart Website
            </Text>
          </Text>
        </Text>
        <Text>
            {'\u2022'}
          <Text style={styles.page_text}>
            Otherwise, clean it as well as possible and schedule an appointment at one of these locations within the next 3 days.
          </Text>
        </Text>
        <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function CastBreaking({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: 200}}>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              Do NOT walk on a broken cast on a lower extremity and do NOT move a broken cast on an upper extremity.
            </Text>
          </Text>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              You need to solve this issue today at any provider, OrthoCare or ED to be evaluated.
            </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
          <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("Info")
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

function SomethingInCast({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            {'\u2022'}
            <Text style={styles.page_text}>
              You need to come in today at any provider, OrthoCare or ED to be evaluated by an orthopedic technician.
            </Text>
          </Text>
          <View style={{alignItems: 'center', padding: 50}}>
            <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("Info")
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

function Distance(userLat, userLon, locationLat, locationLon) {
  return Math.abs(locationLat - userLat) + Math.abs(locationLon - userLon);
}

function Info({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>  
      <Text styles={styles.page_text}>
        Select which type of location you want to find
      </Text>
      <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("UCInfo")
            }}
      >
        <Text style={styles.text}>
          Urgent Care
        </Text>
      </Pressable>
      <Pressable style={styles.button}
            onPress= {() => {
              navigation.navigate("EDInfo")
            }}
      >
        <Text style={styles.text}>
          Emergency Department
        </Text>
      </Pressable>
    </View>
  )
}

function UCInfo({navigation}) {
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

function EDInfo({navigation}) {
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

  const latNum = latitude*1;//parseInt(latitude, 10);
  const lonNum = longitude*1;//parseInt(longitude, 10);

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

function Contact({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>    
          <Text style={styles.page_text}>
            Contact Info
          </Text>
        </View>
      )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4B9CD3'
            },
                headerTintColor: '#fff'
            }} 
          /*initialRouteName="Home"*/>
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
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Info')}
              style= {styles.header_button}
            >
                <Text style={styles.text}>
                    Info
                </Text>
            </Pressable>
          ),
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
        <Stack.Screen name="Worse Pain/Numbness" component={WorsePain} 
        options={({ navigation }) => ({
          headerTitle: "Pain/Numbness",
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
        <Stack.Screen name="Pain" component={Pain} 
        options={({ navigation }) => ({
          headerTitle: "Pain",
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

const styles = StyleSheet.create({
    home_button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      //elevation: 3,
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
    text: {
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
    //   fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    page_text: {
        fontSize: 14,
        //textAlign: 'center',
        //textAlignVertical: 'center',
       //marginTop: 200,
        letterSpacing:  0.5,
    },
    url_text: {
      fontSize: 14,
      textAlign: 'center',
      //textAlignVertical: 'center',
     //marginTop: 200,
      letterSpacing:  0.5,
      color: "blue",
  },
    body: {
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
         marginTop: 200,
        letterSpacing:  0.25,
    }
  });
