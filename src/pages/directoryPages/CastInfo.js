import { Text, ScrollView, SafeAreaView } from 'react-native';
import styles from '../../styles';

export default function CastInfo({ }) {
  //Page with general cast upkeep ({'\u2022} is actually unicode for a bullet point; ScrollView needed to hold all information)
  return (
    <SafeAreaView>
      <ScrollView style={{marginTop: 10}}>
        <Text style={styles.title_text}>
          DO
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do keep your cast clean and dry at all times.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do cover your cast with a plastic bag or cast cover for bathing or showering, but do not submerge your cast in the water. The bag or cover may leak and is only helpful to protect against splashes.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do use a hair dryer on cool air setting to dry your cast if it gets wet by blowing air under the cast.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do cover any rough edges of your cast with tape to prevent skin irritation.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do elevate your cast above your heart if you have increased swelling, pain, numbness, tingling or change in color or circulation. If this does not relieve the symptoms, please contact your provider.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do contact your provider if your cast is damaged, cracked, or extremely wet. The cast will need to be changed.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do contact your provider is there is any red skin irritation, blisters or sores around the edges of the cast or inside the cast.
        </Text>
        <Text style={styles.title_text}>
          DON'T
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do not pull out any padding from under your cast.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do not get your cast wet. If you were told that your cast was applied using water resistant cast padding, you may shower or swim in a pool only, but must dry the lining of the cast after you finish with a cool air hair dryer to prevent skin breakdown.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do not stick anything into your cast to itch. Use a cool hairdryer to relieve any itching or irritation.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do not rest the heel of your leg cast on a pillow or bed. Keep your heel floating off the surface by elevating the leg with a pillow or blanket roll under the calf to prevent sores.
        </Text>
        <Text style={styles.page_text}>
          {'\u2022'} Do not change or remove your cast without permission from your provider.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}