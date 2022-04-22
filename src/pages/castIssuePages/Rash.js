import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Rash({ navigation }) { //Solutions for user that has a rash in their cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.header_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        Is there a rash or itch inside of patient's cast?
      </Text>
      <Text style={styles.header_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could indicate an allergic reaction. However, it is normal to have some itching underneath the cast.
      </Text>
      <Text style={styles.header_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        Never put anything inside of patient's cast/splint. Try tapping the outside of patient's cast/splint. Use a blow dryer with low/cool air or itching another extremity to distract from itching.
      </Text>
      <Text style={styles.header_text}>
        Who to Contact:
      </Text>
      <Text style={styles.page_text}>
        If symptoms do not get better, patient needs to come into clinic the same day or next day for evaluation. Please call 984-974-5700 to schedule an appointment.
      </Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("Info") //Navigates to page for finding nearest hospital
            }}
          >
            <Text style={styles.text}>
              Find your nearest location
            </Text>
          </Pressable>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("Rash Blur") //Navigates to blurred image of problem
            }}
          >
            <Text style={styles.text}>
              Show image of rash
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
