import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';

export default function Contact({navigation}) { //Page for contacting UNC Healthcare
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>    
          <Text style={styles.page_text}>
            Contact Info
          </Text>
        </View>
      )
}