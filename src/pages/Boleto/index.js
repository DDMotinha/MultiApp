import React, {useState} from 'react';
import { View, Text} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Colors, IconButton } from 'react-native-paper';

import style from './style';
import Lista from './Components/Lista de boletos/index'

export default function Boleto(){
    
    return (
        <View style={style.container}>
            <IconButton icon={ require('../../images/Billet.png')} size={120} color={Colors.blue900}/>
            <ScrollView>
                <Lista/>
            </ScrollView>
        </View>
    )
};