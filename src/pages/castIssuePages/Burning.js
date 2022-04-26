import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
let phone = " (984)-974-5700 ";
let phone_url = "tel://+19849745700";

export default function Burning({ navigation }) {
  //Solutions for user that has burning in cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        Is there a burning sensation under the cast/splint in a certain area?
      </Text>
      <Text style={styles.title_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could indicate that there is an area of rubbing putting pressure on patient's skin. If left untreated, it could lead to skin breakdown and possible infection.
      </Text>
      <Text style={styles.title_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        It would be best to be assessed in the office to address this problem. Check patient's skin and make sure there is no signs of skin breakdown.
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
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Pressable style={styles.button}
          onPress={() => {
            navigation.navigate("Info") //Navigates to page for finding nearest hospital
          }}
        >
          <Text style={styles.button_text}>
            Find your nearest location
          </Text>
        </Pressable>
      </View>
    </View>
  )
}