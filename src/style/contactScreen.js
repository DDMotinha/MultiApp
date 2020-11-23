import React from 'react';
import { StyleSheet } from 'react-native';

const contactScreen = StyleSheet.create({
    estilo: {
        flex: 1,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        width: '80%',
        flexDirection:'column'
    },
    img:{
        width: '100%',
        height: '100%',
    },
    border:{
        borderWidth: 1,
        borderColor: "#42a5f5",
        padding: 30,
        alignSelf: "center",
        flexDirection:'row'
    },
 });

 export default contactScreen;