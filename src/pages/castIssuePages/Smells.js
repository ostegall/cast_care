import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
let phone = " (984)-974-5700 ";
let phone_url = "tel://+19849745700";

export default function Smells({ navigation }) {
  //Solutions for user that has smelly cast
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        Problem Description:
      </Text>
      <Text style={styles.page_text}>
        Is there a bad smell coming from patient's cast without a known underlying issue?
      </Text>
      <Text style={styles.title_text}>
        Why this is a Problem:
      </Text>
      <Text style={styles.page_text}>
        This could indicate that there is an infection underneath the cast/splint. Special considerations: This is normal if patient has known wound concerns, known diabetic ulcers, or bowel/bladder incontinence.
      </Text>
      <Text style={styles.title_text}>
        Correcting the Problem:
      </Text>
      <Text style={styles.page_text}>
        It is normal to have a smelly cast due to normal body odor related smells. If the smell is too bad it could indicate there is something else going on. When in doubt, get it checked out.
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
              navigation.navigate("Smells Blur") //Navigates to blurred image of problem
            }}
          >
            <Text style={styles.button_text}>
              Show image of smelly cast
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}