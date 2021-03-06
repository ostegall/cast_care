import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function NoMovement({ navigation }) {
  //Solutions for user that has no movement in cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        No movement of extremity since the cast/splint has been put on. For example: A cast on patient's wrist where they are unable to move fingers.
      </Text>
      <Text style={styles.title_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could indicate that there is excessive pressure on the nerves and blood vessels and they are unable to relieve pressure.
      </Text>
      <Text style={styles.title_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        It is very important to be seen as soon as possible to get your cast removed.
      </Text>
      <Text style={styles.title_text}>
        Who to Contact:
      </Text>
      <Text style={styles.page_text}>
        Come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
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