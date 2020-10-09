import React from 'react';
import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


export default function ContactScreen(){
    return(
    <View style={styles.estilo}>
        <View style={styles.border} >
            <TouchableOpacity onPress={ () => Linking.openURL('https://api.whatsapp.com/send?phone=551139953030&text=1') } >
                <IconButton color={Colors.blue900} icon="chat" size={60} />
                <Text> Contato via WhatsApp </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.border} >
            <TouchableOpacity onPress={ () => Linking.openURL('tel:551139953030') }>
            <IconButton color={Colors.blue900} icon="cellphone" size={60} />
            <Text> Contato via Telefone </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
 const styles = StyleSheet.create({
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