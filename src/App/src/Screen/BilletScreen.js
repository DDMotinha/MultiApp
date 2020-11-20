import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors, IconButton, Icon } from 'react-native-paper';

import billetScreen from '../style/billetScreen'

export default function BilletScreen(){
    
    return (
        <View style={billetScreen.container}>
            <IconButton icon={ require('../image/Billet.png')} size={120} color={Colors.blue900}/>
            <FlatList/>
        </View>
    )
}