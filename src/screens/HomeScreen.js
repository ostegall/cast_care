import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import WorsePain from './WorsePainNumbness';
import Pain from './Pain';
import CastBreaking from './CastBreaking';
import Loose from './Loose';
import Rash from './Rash';
import Smells from './Smells';
import Soiled from './Soiled';
import SomethingInCast from './SomethingInCast';
import Tight from './Tight';

class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    onPress1 = () => {
      props.navigation.navigate(WorsePain);
    };

      onPress2 = () => {
        props.navigation.navigate(Pain);
    }

      onPress3 = () => {
      props.navigation.navigate(Tight);
    }

      onPress4 = () => {
      props.navigation.navigate(Loose);
    }

      onPress5 = () => {
      props.navigation.navigate(Smells);
    }

      onPress6 = () => {
      props.navigation.navigate(Soiled);
    }

      onPress7 = () => {
      props.navigation.navigate(Rash);
    }

      onPress8 = () => {
      props.navigation.navigate(SomethingInCast);
    }
    
      onPress9 = () => {
      props.navigation.navigate(CastBreaking);
    }

    render () {
      return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={onPress1}>
              <Text>Worsening pain; Numbness; Burning; Severe swelling; No movement?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress2}>
              <Text>Pain?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress3}>
              <Text>Feel Too Tight?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress4}>
              <Text>Feel Too Loose?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress5}>
              <Text>Smell Bad?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress6}>
              <Text>Soiled or Wet?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress7}>
              <Text>Rash or Itching?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress8}>
              <Text>Something in Cast?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress9}>
              <Text>Cast Breaking?</Text>
            </TouchableOpacity>
          </View>
      );
    }
}

export default HomeScreen