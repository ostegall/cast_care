import { StatusBar } from 'expo-status-bar';
//import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Worse Pain/Numbness');
            }}>
            <Text style={styles.text}>Worsening pain; Numbness; Burning; Severe swelling; No movement?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Pain');
            }}>
            <Text style={styles.text}>Pain?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Tight');
            }}>
            <Text style={styles.text}>Feel Too Tight?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Loose');
            }}>
            <Text style={styles.text}>Feel Too Loose?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Smells');
            }}>
            <Text style={styles.text}>Smells Bad?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Soiled');
            }}>
            <Text style={styles.text}>Soiled or Wet?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Rash');
            }}>
            <Text style={styles.text}>Rash or Itching?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Something In Cast');
            }}>
            <Text style={styles.text}>Something In Cast?</Text>
          </Pressable>
          <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Cast Breaking');
            }}>
            <Text style={styles.text}>Cast Breaking?</Text>
          </Pressable>
        </View>
    );
}

function WorsePain ({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Worsening pain; Numbness; Burning; Severe swelling; No movement? Selection
          </Text>
        </View>
      )
}

function Pain({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Pain? Selection
          </Text>
        </View>
      )
}

function Tight({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Tight? Selection
          </Text>
        </View>
      )
}

function Loose({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Loose? Selection
          </Text>
        </View>
      )
}

function Smells({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Smells? Selection
          </Text>
        </View>
      )
}

function Rash({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Rash? Selection
          </Text>
        </View>
      )
}

function Soiled({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Soiled? Selection
          </Text>
        </View>
      )
}

function CastBreaking({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Cast Breaking? Selection
          </Text>
        </View>
      )
}

function SomethingInCast({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Something In Cast? Selection
          </Text>
        </View>
      )
}

function Info({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Info
          </Text>
        </View>
      )
}

function Contact({navigation}) {
    return (
        <View>
          <Text style={styles.page_text}>Contact
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
        <Stack.Screen name="Home" component={HomeScreen} 
            options={({ navigation }) => ({
                headerTitle: "Home Page",
                headerRight: () => (
                  <Pressable
                    onPress={() => navigation.navigate('Info')}
                    style= {styles.header_button}
                  >
                      <Text style={styles.text}>
                          Info
                      </Text>
                  </Pressable>
                ),
                headerLeft: () => (
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
        <Stack.Screen name="Worse Pain/Numbness" component={WorsePain} />
        <Stack.Screen name="Pain" component={Pain} />
        <Stack.Screen name="Cast Breaking" component={CastBreaking} />
        <Stack.Screen name="Loose" component={Loose} />
        <Stack.Screen name="Rash" component={Rash} />
        <Stack.Screen name="Tight" component={Tight} />
        <Stack.Screen name="Smells" component={Smells} />
        <Stack.Screen name="Soiled" component={Soiled} />
        <Stack.Screen name="Something In Cast" component={SomethingInCast} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
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
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 200,
        letterSpacing:  0.25,
    }
  });
