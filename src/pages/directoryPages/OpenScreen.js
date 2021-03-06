import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function OpenScreen({navigation}) { 
  /*Liability Page for user to accept to reduce client's liability for injuries/nonaction 
  (client did not receive liability statement from their legal before end of semester)*/
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.page_text}>
          *Insert Liability Statement Here*
      </Text>
      <Text style={styles.page_text}>
          Please Accept to Continue
      </Text>
      <Pressable style={styles.button} 
            onPress = {() => {
                navigation.navigate('Home'); //navigates to screen for diagnosing cast issue(s)
            }}>
        <Text style={styles.button_text}>
            Accept
        </Text>
      </Pressable>    
    </View>
  )
}