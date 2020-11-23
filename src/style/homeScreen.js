import React from 'react';
import { StyleSheet } from 'react-native';

const homeScreen = StyleSheet.create({
    img:{
      alignSelf: "center",
      width: '100%',
      height: '10%',
      padding: 70,
      marginTop: 20,
    },
    container: {
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      flex: 1,
      width: '98%',
    },
    button: {
      position: "absolute",
      marginBottom: 30,
      width: '99%',
      height: 120,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      flexDirection: "collumn",
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 18,
    },
    viewInt:{
      flex: 1,
    },
    viewExt: {
      flex: 2, 
      flexDirection: 'row',
    },
    imgIcon:{
      width: 50,
      height: 50,
    }
    
  });

  export default homeScreen;