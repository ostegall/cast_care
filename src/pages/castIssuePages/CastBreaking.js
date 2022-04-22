import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function CastBreaking({ navigation }) { //Solutions for user that has a breaking/broken cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.header_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        Is patient's cast breaking or soft in certain places?
      </Text>
      <Text style={styles.header_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could indicate the cast is not thick enough to support patient's fracture.
      </Text>
      <Text style={styles.header_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        It is important to be assessed to get another cast put on to properly support the fracture.
      </Text>
      <Text style={styles.header_text}>
        Who to Contact:
      </Text>
      <Text style={styles.page_text}>
        Patient needs to come into clinic the same day or next day for evaluation. To do so, please call 984-974-5700 to schedule an appointment.
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
              navigation.navigate("Cast Breaking Blur") //Navigates to blurred image of problem
            }}
          >
            <Text style={styles.text}>
              Show image of breaking cast
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}