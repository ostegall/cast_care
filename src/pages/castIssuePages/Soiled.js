import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
const url = "https://www.myuncchart.org/myChart/Authentication/Login";

export default function Soiled({navigation}) { //Solutions for user that has soiled cast
    return (
      <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Is patient's cast wet or soiled? Has the patient gotten their cast/splint saturated?          
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            A wet or soiled cast can lead to skin breakdown and maceration of the skin which can lead to infections if not treated.          
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            Dry with a hairdryer (which can take a while) if patient is able to. If patient's cast is still saturated, schedule an appointment. Special considerations: Soiling is common for spica casts, scoliosis, or clubfoot casts.          
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            If patient's cast is completely saturated: send a picture via 
              <Text style={styles.url_text} //separate text box for an inline link to the UNC MyChart Authentication website
                onPress={() => Linking.openURL(url)}>
                MyChart
              </Text>  
            . The patient needs to make an appointment within 24 hours. If patient's cast is soiled, clean as well as possible and schedule an appointment wihtin the next three days.      
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