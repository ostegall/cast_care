import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ //different CSS styling for buttons and text
  home_button: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4292c7",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 5,
    height: 100,
    width: 160
  },
  button: {
    height: 80,
    width: 120,
    backgroundColor: "#4292c7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  landing_button: {
    height: 180,
    width: 280,
    backgroundColor: "#4292c7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4292c7',
  },
  landing_header_text: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  landing_text: {
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  landing_page_text: {
    fontSize: 28,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  landing_header_text: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  home_button_text: {
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  header_text: {
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  page_text: {
    fontSize: 17,
    letterSpacing: 0.5,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
    // textAlign: 'center',
  },
  location_text: {
    fontSize: 17,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  url_text: {
    fontSize: 17,
    letterSpacing: 0.5,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    color: "blue",
  },
  buttonRow: {
    height: 83,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 24,
    marginTop: 20
  },
});

export default styles;