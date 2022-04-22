import React from 'react';
import { Text, View, Pressable, Linking } from 'react-native';
import styles from '../../styles';
import Distance from './distance.js'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import coordinates from './coordinates.js';
import { WebView } from 'react-native-webview';
let url = "";
let phone_url = "";

export default function EDInfo() { //Helper function to calculate which of the four hard-coded Emergency Departments is closest

  let errorMsg, location = coordinates();

  let latitude = '';
  let longitude = '';
  if (errorMsg) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.page_text}>
          Please allow location access
        </Text>
      </View>
    )
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  const latNum = latitude * 1;
  const lonNum = longitude * 1;

  // console.log(latNum);
  // console.log(lonNum);

  if (latNum == 0 && lonNum == 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    let address1 = '';
    let address2 = '';
    let address = '';
    let url1 = '';
    let url2 = '';
    let phone1 = '';
    let phone2 = '';
    let phone = '';
    let phone_url1 = '';
    let phone_url2 = '';

    if (Distance(latNum, lonNum, chathamLat, chathamLon) < Distance(latNum, lonNum, rexLat, rexLon)) {
      hosp1Lat = chathamLat;
      hosp1Lon = chathamLon;
      hospital1 = "Chatham Hospital Emergency Department";
      address1 = " 475 Progress Blvd, Siler City, NC, 27344";
      url1 = "https://goo.gl/maps/B6xnSEw8ZrkW8b4i7"
      phone1 = "(919)-799-4000";
      phone_url1 = "tel://+19197994000";
    } else {
      hosp1Lat = rexLat;
      hosp1Lon = rexLon
      hospital1 = "REX Healthcare Emergency Department";
      address1 = " 4420 Lake Boone Trail, Raleigh, NC 27607";
      url1 = "https://goo.gl/maps/PnTGnEsq7aJQUdRz5";
      phone1 = "(919)-784-1615";
      phone_url1 = "tel://+19197841615";
    }

    if (Distance(latNum, lonNum, hillsboroLat, hillsboroLon) < Distance(latNum, lonNum, uncLat, uncLon)) {
      hosp2Lat = hillsboroLat;
      hosp2Lon = hillsboroLon;
      hospital2 = "UNC Hospitals Hillsborough Campus Emergency Department";
      address2 = " 430 Waterstone Drive, Hillsborough, NC, 27278";
      url2 = "https://goo.gl/maps/nbShenpADiPz7Puk7";
      phone2 = "(984)-215-2000";
      phone_url2 = "tel://+19842152000";
    } else {
      hosp2Lat = uncLat;
      hosp2Lon = uncLon
      hospital2 = "UNC Hospitals Emergency Department";
      address2 = " 101 Manning Drive, Chapel Hill, NC, 27514";
      url2 = "https://goo.gl/maps/CVAXFKULcdXZHtnw7";
      phone2 = "(984)-974-4721";
      phone_url2 = "tel://+19849744721";
    }

    if (Distance(latNum, lonNum, hosp1Lat, hosp1Lon) < Distance(latNum, lonNum, hosp2Lat, hosp2Lon)) {
      hospital = hospital1;
      address = address1;
      url = url1;
      phone = phone1;
      phone_url = phone_url1;
    } else {
      hospital = hospital2;
      address = address2;
      url = url2;
      phone = phone2;
      phone_url = phone2;
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.location_text}>
          Your nearest Emergency Department is {hospital}
        </Text>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.location_text}>
            Address:
            <Text style={styles.url_text} //separate text box for an inline link to adrress
              onPress={() => Linking.openURL(url)}>
              {address}
            </Text>
          </Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.location_text}>
            Phone Number: {phone}
          </Text>
        </View>
      </View >
    )
  }
}