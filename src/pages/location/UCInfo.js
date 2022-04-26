import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../../styles';
import Distance from './distance.js'
import coordinates from './coordinates.js';
let url = "";
let phone_url = "";

export default function UCInfo() {
  //Helper function to calculate which of the two hard-coded Urgent Cares is closest
  let errorMsg, location = coordinates();

  let latitude = '';
  let longitude = '';
  if (errorMsg) {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.page_text}>
        Please allow location access
      </Text>
    </View>)
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  const latNum = latitude * 1;
  const lonNum = longitude * 1;

  if (latNum == 0 && lonNum == 0) { //waiting for location and latitude to come in
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.page_text}>
          Your nearest Urgent Care is loading...
        </Text>
      </View>
    )
  } else { //calculate which hardcoded urgent care is closest
    let uncHospLat = 35.910970;
    let uncHospLon = -78.982520;

    let pantherCreekLat = 35.828970;
    let pantherCreekLon = -78.878230;

    let hospital = '';
    let address = '';
    let phone = '';

    if (Distance(latNum, lonNum, uncHospLat, uncHospLon) > Distance(latNum, lonNum, pantherCreekLat, pantherCreekLon)) {
      hospital = 'UNC Orthopedics at Panther Creek';
      address = ' 6715 McCrimmon Parkway, Cary, NC, 27519';
      url = "https://g.page/panthercreekoffice?share";
      phone = "(919)-781-5600"
      phone_url = "tel://+19197815600";
    } else {
      hospital = 'Chapel Hill Orthopedics';
      address = ' 6011 Farrington Rd, Chapel Hill, NC, 27517';
      url = "https://goo.gl/maps/3JyMAKf6Dw3igyAo9";
      phone = "(984)-974-5700";
      phone_url = "tel://+19849745700";
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.location_text}>
          Your nearest Urgent Care is {hospital}
        </Text>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.location_text}>
            Address:
            <Text style={styles.url_text} //separate text box for an inline link to open address in Google Maps
              onPress={() => Linking.openURL(url)}>
              {address}
            </Text>
          </Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.location_text}>
            Phone Number:
            <Text style={styles.url_text} //separate text box for an inline link to call urgent care
              onPress={() => Linking.openURL(phone_url)}>
              {phone}
            </Text>
          </Text>
        </View>
      </View>
    )
  }
}