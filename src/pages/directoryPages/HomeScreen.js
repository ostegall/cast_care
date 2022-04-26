import { Text, View, Pressable, Image } from 'react-native';
import styles from '../../styles';

export default function HomeScreen({ navigation }) {
  //Screen where user can select which cast issue(s) they are dealing with
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 30 }}>
        <Text style={styles.title_text}>
          Issue Diagnosis
        </Text>
        <Text style={styles.page_text}>
          What issue(s) can we help you solve?
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Worse Pain'); /*2x6 (6 rows of 2 buttons) array of buttons with images (see below) 
            that leads to specific cast issue page*/
          }}>
          <Image source={require("../../img/worsepain.png")} /* image provided by client for each issue */ /> 
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Numbness');
          }}>
          <Image source={require("../../img/numbness.png")} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Soiled');
          }}>
          <Image source={require("../../img/soiled.png")} />
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('No Movement');
          }}>
          <Image source={require("../../img/nomovement.png")} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Swelling');
          }}>
          <Image source={require("../../img/swelling.png")} />
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Burning');
          }}>
          <Image source={require("../../img/burning.png")} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Tight');
          }}>
          <Image source={require("../../img/tight.png")} />
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Loose');
          }}>
          <Image source={require("../../img/loose.png")} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Smells');
          }}>
          <Image source={require("../../img/smells.png")} />
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Rash');
          }}>
          <Image source={require("../../img/rash.png")} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Something In Cast');
          }}>
          <Image source={require("../../img/foreignobject.png")} />
        </Pressable>
        <Pressable style={styles.home_button}
          onPress={() => {
            navigation.navigate('Cast Breaking');
          }}>
          <Image source={require("../../img/damaged.png")} />
        </Pressable>
      </View>
    </View>
  );
}