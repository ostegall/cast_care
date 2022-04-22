import { Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import styles from '../../../styles';

export default class SoiledBlurImage extends React.Component { 
    constructor(props) {
        super(props)
        
        this.state = {
            blurred: true,
        }
    }

    render() {
        return (
            <View>
                <View style={{alignItems: 'center', paddingTop: 60}}>
                    <Text style={styles.header_text }>
                        Effects on Skin after Soiled Cast
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    {this.state.blurred ? <Image source={require('../../../img/soiledblur.jpeg')} style={{resizeMode: 'cover', }} /> : <Image source={require('../../../img/soiled.jpeg')} style={{resizeMode: 'cover'}} />}
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.page_text}>
                        Warning: image may be graphic, use discretion
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Pressable style={styles.button}
                    onPress= {() => {
                        this.setState({blurred: !this.state.blurred});
                    }}
                    >
                        {this.state.blurred ? <Text style={styles.text }>Click to unblur image</Text> : <Text style={styles.text }>Click to blur image</Text>}
                    </Pressable>
                </View>
            </View>
        )
    }
}