import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Swelling({navigation}) { //Solutions for user that has swelling in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Has patient had increased swelling near or around their cast/splint since having it applied?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that the cast/splint is too tight and restricting circulation to the extremity.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to address this quickly as there are other problems that could result if left untreated.
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