import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Loose({navigation}) { //Solutions for user that has loose cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            There will be a little bit of wiggle room in the cast, anything beyond 2 fingers between patient's cast and patient's skin is too much.
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could indicate that the cast/splint is no longer supporting the fracture.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to have a proper fitting cast to assist the healing process.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Schedule an appointment in the next 2 business days by calling 984-974-5700. Special consideration: If patient's cast is likely to come off soon, you need to be seen on the same day or come into the Orthonow walk-in clinic.          
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