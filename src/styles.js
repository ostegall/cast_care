import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ //styling for buttons and text
  button: { //general styling for buttons
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
  home_button: { //different button styling used for home buttons that must fit on one page (w/ icons)
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
  landing_button: { //much larger button styling to be used to fill out landing page
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
  header_button: { //styling for buttons on the header
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4292c7',
  },
  button_row: { //styling view for placing buttons in a row
    height: 83,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 24,
    marginTop: 20
  },
  button_text: { //white, small text styling for text in a button
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  page_text: { //black text styling for text on a page
    fontSize: 17,
    letterSpacing: 0.5,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
  },
  title_text: { //general text styling for title text
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  landing_title_text: { //large text styling for title text on the landing page
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  landing_button_text: { //large text styling for text in a button on the landing page
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  landing_page_text: { //large text styling for text on the landing page
    fontSize: 28,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  location_text: { //text styling for text on the location page (can this not just be page_text?)
    fontSize: 17,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  url_text: { //text styling for hyperlinks
    fontSize: 17,
    letterSpacing: 0.5,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    color: "blue",
  },
});

export default styles;