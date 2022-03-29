import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function HomeScreen({navigation}) { //Screen where user can select which cast issue(s) they are dealing with
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