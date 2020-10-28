// Import das integrações

import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

// Import das telas

import BilletScreen from './BilletScreen';
import TestScreen from './TestScreen';
import ConsumeScreen from './ConsumeScreen';
import UnlockScreen from './UnlockScreen';
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';

import homeScreen from '../style/homeScreen';

// Navigation Buttons

export default function HomeScreen({ navigation }) {
    return (
    <View style={homeScreen.container}>
      <Image
        source={ require('../image/logo.png')}
        style={homeScreen.img}
      />
      <View style={homeScreen.viewExt}>
        <View style={homeScreen.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(BilletScreen)} >
            <View style={homeScreen.button}>
              <IconButton icon={ require('../image/Billet.png')} size={35} color={Colors.blue900}/>
              <Text style={homeScreen.buttonText}>2ª VIA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={homeScreen.viewExt}>
        <View style={homeScreen.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(ContactScreen)} >
            <View style={homeScreen.button}>
              <IconButton icon={ require('../image/Contact.png')} size={35} color={Colors.blue900}/>
              <Text style={homeScreen.buttonText}>ENTRAR EM CONTATO</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={homeScreen.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(TestScreen)} >
              <View style={homeScreen.button}>
                <IconButton icon={ require('../image/Speed.png')} size={35} color={Colors.blue900}/>
                <Text style={homeScreen.buttonText}>TESTE DE VELOCIDADE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeScreen.viewExt}>
          <View style={homeScreen.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(UnlockScreen)}  >
              <View style={homeScreen.button}>
                <IconButton icon={ require('../image/Lock.png')} size={35} color={Colors.blue900}/>
                <Text style={homeScreen.buttonText}>AUTO-DESBLOQUEIO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={homeScreen.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(ConsumeScreen)} >
              <View style={homeScreen.button}>
               <IconButton icon={ require('../image/Consume.png')} size={35} color={Colors.blue900}/>
                <Text style={homeScreen.buttonText}>CONSUMO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
