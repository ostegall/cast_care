import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function LandingPage({navigation}) { //Opening Page for user to choose between looking at general cast upkeep or diagnosin & solving cast issues
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