import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Info({ navigation }) { 
  //Page for determining which type of hospital user would like to find nearest to them
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
        <Text style={styles.title_text}>
          Find your nearest UNC Hospital
        </Text>
        <Text style={styles.page_text}>
          Where would you like to go?
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.button_row}>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("UCInfo") //Navigates to Urgent Care Page
            }}
          >
            <Text style={styles.button_text}>
              Urgent Care
            </Text>
          </Pressable>
          <Pressable style={styles.button}
            onPress={() => {
              navigation.navigate("EDInfo") //Navigates to Emergency Department Page
            }}
          >
            <Text style={styles.button_text}>
              Emergency Department
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}