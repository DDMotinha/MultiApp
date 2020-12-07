import React from 'react';
import { View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors, IconButton } from 'react-native-paper';

import style from './style';

export default function Boleto(){
    
    return (
        <View style={style.container}>
            <IconButton icon={ require('../../images/Billet.png')} size={120} color={Colors.blue900}/>
            <FlatList/>
        </View>
    )
};