import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function WorsePain ({navigation}) { //Solutions for user that has worsening pain in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Has patient had increased pain since cast/splint was put on?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            If pain is disproportionate to what it was prior to putting on the cast/splint, could mean that the fracture shifted or there is something wrong with the cast/splint.
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Some increased pain is normal to feel, as there is some movement when we were casting/splinting you. Pain should subside in a couple of hours.
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