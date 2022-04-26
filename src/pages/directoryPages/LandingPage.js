import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function LandingPage({ navigation }) {
  //Opening Page for user to choose between looking at general cast upkeep or diagnosin & solving cast issues
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.landing_title_text}>
          Welcome to Cast Care!
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.landing_page_text}>
            What cast information would you like to find?
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <View style={{ paddingBottom: 20 }}>
          <Pressable style={styles.landing_button}
            onPress={() => {
              navigation.navigate('Cast Info'); //navigates to page to look at general cast upkeep
            }}>
            <Text style={styles.landing_button_text}>
              General Cast Upkeep Information
            </Text>
          </Pressable>
        </View>
        <Pressable style={styles.landing_button}
          onPress={() => {
            navigation.navigate('Open Screen'); //navigates to page to diagnose and solve cast issues
          }}>
          <Text style={styles.landing_button_text}>
            Common Cast Issues
          </Text>
        </Pressable>
      </View>
    </View>
  )
}