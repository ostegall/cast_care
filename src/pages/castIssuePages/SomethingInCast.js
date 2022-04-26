import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
let phone = " (984)-974-5700 ";
let phone_url = "tel://+19849745700";

export default function SomethingInCast({ navigation }) {
  //Solutions for user that has something in cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        Did something fall inside the cast? Did something get stuck inside of the cast and the patient cannot get it out?
      </Text>
      <Text style={styles.title_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could lead to a pressure sore and skin breakdown.
      </Text>
      <Text style={styles.title_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        It is important to return to the clinic to be assessed and take the cast off for further assessment.
      </Text>
      <Text style={styles.title_text}>
        Who to Contact:
      </Text>
      <Text style={styles.page_text}>
        Patient needs to come in the same day or next day to be evaluated. To do so, please call
        <Text style={styles.url_text} //separate text box for an inline link to call UNC hospital
          onPress={() => Linking.openURL(phone_url)}>
          {phone}
        </Text>
        or go to UNC Orthonow.
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
              navigation.navigate("Something In Cast Blur") //Navigates to blurred image of problem
            }}
          >
            <Text style={styles.button_text}>
              Show image of something in cast
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}