import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../../styles';
import Distance from './distance.js'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import coordinates from './coordinates.js';

export default function EDInfo() { //Helper function to calculate which of the four hard-coded Emergency Departments is closest

  let errorMsg, location = coordinates();

  let latitude = '';
  let longitude = '';
    if (errorMsg) {
        latitude = errorMsg; //throw exception?
    } else if (location) {
        latitude = location.coords.latitude;
        longitude = location.coords.longitude;
    }

  const latNum = latitude * 1;
  const lonNum = longitude * 1;

  console.log(latNum);
  console.log(lonNum);

  if (latNum == 0 && lonNum == 0) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.page_text}>
              Your nearest Emergency Department is loading...
            </Text>
      </View>
    )
  } else { 
    let chathamLat = 35.722990;
    let chathamLon = -79.420980;

    let rexLat = 35.815500;
    let rexLon = -78.705030;

    let hillsboroLat = 36.037240;
    let hillsboroLon = -79.091350;

    let uncLat = 35.903660;
    let uncLon = -79.052231;

    let hosp1Lat = 0;
    let hosp1Lon = 0;
    let hosp2Lat = 0;
    let hosp2Lon = 0;

    let hospital1 = '';
    let hospital2 = '';
    let hospital = '';

    if (Distance(latNum, lonNum, chathamLat, chathamLon) < Distance(latNum, lonNum, rexLat, rexLon)) {
      hosp1Lat = chathamLat;
      hosp1Lon = chathamLon;
      hospital1 = "Chatham";
    } else {
      hosp1Lat = rexLat;
      hosp1Lon = rexLon
      hospital1 = "Rex";
    } 

    if (Distance(latNum, lonNum, hillsboroLat, hillsboroLon) < Distance(latNum, lonNum, uncLat, uncLon)) {
      hosp2Lat = hillsboroLat;
      hosp2Lon = hillsboroLon;
      hospital2 = "Hillsboro";
    } else {
      hosp2Lat = uncLat;
      hosp2Lon = uncLon
      hospital2 = "UNC";
    } 

    if (Distance(latNum, lonNum, hosp1Lat, hosp1Lon) < Distance(latNum, lonNum, hosp2Lat, hosp2Lon)) {
      hospital = hospital1;
    } else {
      hospital = hospital2;
    } 

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.page_text}>
              Your nearest Emergency Department is {hospital}
            </Text>
      </View>
    )
  }
}