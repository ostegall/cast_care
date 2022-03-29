import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function OpenScreen({navigation}) { //Liability Page for user to accept to reduce client's liability for injuries/nonaction
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.page_text}>
          *Insert Liability Statement Here*
      </Text>
      <Text>
          Please Accept to Continue
      </Text>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Home'); //navigates to screen for diagnosing cast issue(s)
            }}>
        <Text style={styles.text}>
            Accept
        </Text>
      </Pressable>    
    </View>
  )
}