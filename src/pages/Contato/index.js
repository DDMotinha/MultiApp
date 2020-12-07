import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import style from './style';


export default function Contato(){
    const mensage =  "Olá, gostaria de ser atendido?"
    return(
    <View style={style.estilo}>
        <View style={style.border} >
            <TouchableOpacity onPress={ () => Linking.openURL('https://api.whatsapp.com/send?phone=551139953030&text='+ mensage +'') } >
                <IconButton color={Colors.blue900} icon="chat" size={60} />
                <Text> Contato via WhatsApp </Text>
            </TouchableOpacity>
        </View>
        <View style={style.border} >
            <TouchableOpacity onPress={ () => Linking.openURL('tel:551139953030') }>
            <IconButton color={Colors.blue900} icon="cellphone" size={60} />
            <Text> Contato via Telefone </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}