import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function CastInfo({navigation}) { //Page with general cast upkeep
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>
          {'\u2022'} {/* code for a bullet point */}
            <Text style={styles.page_text}>
              Keep cast clean and dry
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              Do not stick anything inside of cast or splint
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              If cast/splint becomes itchy: blow dry on low cool air, tap, or itch other side
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              Elevate above the level of patient's heart
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              It is normal to have increased pain right after a cast/splint is put on due to moving the fracture
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              Patient can ice through the cast/splint by using a gel ice pack or making sure the condensation from the ice bag does not get on the cast/splint; some people may or may not be able to feel the ice
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              No powders or lotions down cast/splint
            </Text>
        </Text>
        <Text>
          {'\u2022'}
            <Text style={styles.page_text}>
              Wiggle fingers as much as possible
            </Text>
        </Text>
      </View>
    )
  }