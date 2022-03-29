import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';
import Distance from './distance.js'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import coordinates from './coordinates.js';

export default function UCInfo() { //Helper function to calculate which of the two hard-coded Urgent Cares is closest
    let errorMsg, location = coordinates();

    console.log(location);

    let latitude = '';
    let longitude = '';
      if (errorMsg) {
          latitude = errorMsg;
      } else if (location) {
          latitude = location.coords.latitude;
          longitude = location.coords.longitude;
      }

    console.log(latitude);
    console.log(longitude);

    const latNum = latitude * 1;
    const lonNum = longitude * 1;

    if (latNum == 0 && lonNum == 0) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.page_text}>
                Your nearest Urgent Care is loading...
              </Text>
        </View>
      )
    } else {
      let uncHospLat = 35.910970;
      let uncHospLon = -78.982520;

      let pantherCreekLat = 35.828970;
      let pantherCreekLon = -78.878230;

      let hospital = '';
      if (Distance(latNum, lonNum, uncHospLat, uncHospLon) > Distance(latNum, lonNum, pantherCreekLat, pantherCreekLon)) {
        hospital = 'UNC Ortho at Panther Creek';
      } else {
        hospital = 'UNC Hospitals';
      }
    
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.page_text}>
                  Your nearest Urgent Care is {hospital}
                </Text>
          </View>
        )
    }
}