import { Text, View } from 'react-native';
import styles from '../../styles';

export default function FAQ({ }) {
  //Page for answering common questions about cast upkeep as well as for information about application
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text style={styles.title_text}>
        FAQ
      </Text>
      <Text style={styles.page_text}>
        What should I do if my cast issue is not listed in the app?
      </Text>
      <Text style={styles.page_text}>
        {'\u2022'} If you feel as though you have an issue with your cast that does not fall under one of the categories we cover here, please contact your provider.
      </Text>
      <Text style={styles.page_text}>
        Does this app collect and store any data about my personal information or health?
      </Text>
      <Text style={styles.page_text}>
        {'\u2022'} No, this app does not collect or store any data about its users.
      </Text>
      <Text style={styles.page_text}>
        What should I do if I was treated at a non-UNC hospital?
      </Text>
      <Text style={styles.page_text}>
        {'\u2022'} The information in the app would still apply, except you do not have to go to a UNC hospital as the app suggests
      </Text>
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.title_text}>
          About
        </Text>
        <Text style={styles.page_text}>
          CastCare is a mobile information and support system for patients who are having issues with their casts or are interested in learning more about taking proper care of their casts. By providing general instructions in a clear and simple manner, CastCare hopes to provide users with essential at-home access to medical information that is often contained in physical pamphlets.
        </Text>
      </View>
    </View>
  )
}