import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function SomethingInCast({navigation}) { //Solutions for user that has something in cast
    return (
        <View style={{flex: 1, paddingTop: 160}}>
          <Text style={styles.header_text }>
            Problem Description:
          </Text>
          <Text style={styles.page_text}>
            Did something fall inside the cast? Did something get stuck inside of the cast and the patient cannot get it out?
          </Text>
          <Text style={styles.header_text }>
            Why this is a Problem:
          </Text>
          <Text style={styles.page_text}>
            This could lead to a pressure sore and skin breakdown. 
          </Text>
          <Text style={styles.header_text }>
            Correcting the Problem:
          </Text>
          <Text style={styles.page_text}>
            It is important to return to the clinic to be assessed and take the cast off for further assessment. 
          </Text>
          <Text style={styles.header_text }>
            Who to Contact:
          </Text>
          <Text style={styles.page_text}>
            Patient needs to come in the same day or next day to be evaluated. To do so, please call 978-974-5700 or go to UNC Orthonow.
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