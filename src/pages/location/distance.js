export default function Distance(userLat, userLon, locationLat, locationLon) { //Helper function to calculate distance between user location and hospital location
    return Math.abs(locationLat - userLat) + Math.abs(locationLon - userLon);
}