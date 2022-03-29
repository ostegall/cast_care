import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ //different CSS styling for buttons and text
    home_button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      width: 115,
      borderWidth: 2,
      backgroundColor: 'black',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      width: 200,
      backgroundColor: 'black',
    },
    header_button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#4B9CD3',
    },
    header_text: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing:  0.5,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
      letterSpacing: 0.25,
      color: 'white',
    },
    page_text: {
        fontSize: 14,
        letterSpacing:  0.5,
    },
    url_text: {
      fontSize: 14,
      textAlign: 'center',
      letterSpacing:  0.5,
      color: "blue",
  },
  });

  export default styles;