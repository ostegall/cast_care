import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
let phone = " (984)-974-5700 ";
let phone_url = "tel://+19849745700";

export default function Tight({ navigation }) {
  //Solutions for user that has a tight cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        There should be room enough for 2 fingers to slide between patient's cast and patient's skin. If there is not enough and the cast is too tight or if there is not enough room between the cast/splint and patient's skin, it could restrict motion.
      </Text>
      <Text style={styles.title_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        If the cast is too tight, it could cut off circulation and cause other issues. It is important it is not too tight, elevate extremity 6-8 hours and anytime it is throbbing.
      </Text>
      <Text style={styles.title_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        Make sure fingers/toes are not white, swollen, shiny or do not blanch after elevation. If they do, schedule an appointment.
      </Text>
      <Text style={styles.title_text}>
        Who to Contact:
      </Text>
      <Text style={styles.page_text}>
        Follow-up with the office by calling 
        <Text style={styles.url_text} //separate text box for an inline link to call UNC hospital
          onPress={() => Linking.openURL(phone_url)}>
          {phone}
        </Text>
        to schedule a same-day appointment or come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
      </Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.button_row}>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.button_text}>
              Find your nearest location
            </Text>
          </Pressable>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("Tight Blur") //Navigates to blurred image of problem
            }}
          >
            <Text style={styles.button_text}>
              Show image of tight cast
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}