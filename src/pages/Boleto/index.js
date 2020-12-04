import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors, IconButton, Icon } from 'react-native-paper';

import style from './style';

export default function Boleto(){
    
    return (
        <View style={style.container}>
            <IconButton icon={ require('../image/Billet.png')} size={120} color={Colors.blue900}/>
            <FlatList/>
        </View>
    )
}