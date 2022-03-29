import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Info({navigation}) { //Page for determining which type of hospital user would like to find nearest to them
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>  
        <Text styles={styles.page_text}>
          Select which type of location you want to find
        </Text>
        <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("UCInfo") //Navigates to Urgent Care Page
              }}
        >
          <Text style={styles.text}>
            Urgent Care
          </Text>
        </Pressable>
        <Pressable style={styles.button}
              onPress= {() => {
                navigation.navigate("EDInfo") //Navigates to Emergency Department Page
              }}
        >
          <Text style={styles.text}>
            Emergency Department
          </Text>
        </Pressable>
      </View>
    )
  }