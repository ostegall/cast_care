import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Numbness({navigation}) { //Solutions for user that has numbness in cast
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