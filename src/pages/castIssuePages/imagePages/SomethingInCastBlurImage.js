import { Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import styles from '../../../styles';

export default class SomethingInCastBlurImage extends React.Component {
    //React Native page for rendering blurred/unblurred image of something in cast dependent on user cliking button
    constructor(props) {
        super(props)

        this.state = {
            blurred: true,
        }
    }

    render() {
        return (
            <View>
                <View style={{ alignItems: 'center', paddingTop: 60 }}>
                    <Text style={styles.title_text}>
                        Something In Cast Image
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    {this.state.blurred ?
                        <Image source={require('../../../img/somethingincastblur.jpeg')} style={{ resizeMode: 'cover', }} /*blurred image*/ />
                        :
                        <Image source={require('../../../img/somethingincast.jpeg')} style={{ resizeMode: 'cover' }} /*unblurred image*/ />}
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.page_text}>
                        Warning: image may be graphic, use discretion
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable style={styles.button}
                        onPress={() => {
                            this.setState({ blurred: !this.state.blurred }); //blur/unblur button
                        }}
                    >
                        {this.state.blurred ? <Text style={styles.button_text}>Click to unblur image</Text> : <Text style={styles.button_text}>Click to blur image</Text>}
                    </Pressable>
                </View>
            </View>
        )
    }
}