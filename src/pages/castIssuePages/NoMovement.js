import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function NoMovement({navigation}) { //Solutions for user that has no movement in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            No movement of extremity since the cast/splint has been put on. For example: A cast on patient's wrist where they are unable to move fingers.
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            FILL IN HERE
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            FILL IN HERE
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Come into the Orthonow walk-in clinic. If patient is not in the NC Triangle area, please go to your local ED.
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