import React, {useState} from 'react';
import { View, Text} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import segundavia from '../../../../services/segundavia';


export default function Lista(){

   const bol = segundavia();

    function dadosBoleto(){
       return(
        <View>
            <Text>
                
            </Text>
        </View>
       )
   }
    
    return (
        <View >
            <ScrollView>
                <FlatList
                    data={bol}
                    renderItem={dadosBoleto}
                />
            </ScrollView>
        </View>
    )
};