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

// import de estilo

import style from './style';

// Navigation Buttons

export default function Inicial({ navigation }) {
    return (
    <View style={style.container}>
      <Image
        source={ require('../image/logo.png')}
        style={style.img}
      />
      <View style={style.viewExt}>
        <View style={style.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(BilletScreen)} >
            <View style={style.button}>
              <IconButton icon={ require('../image/Billet.png')} size={35} color={Colors.blue900}/>
              <Text style={style.buttonText}>2ª VIA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.viewExt}>
        <View style={style.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(ContactScreen)} >
            <View style={style.button}>
              <IconButton icon={ require('../image/Contact.png')} size={35} color={Colors.blue900}/>
              <Text style={style.buttonText}>ENTRAR EM CONTATO</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(TestScreen)} >
              <View style={style.button}>
                <IconButton icon={ require('../image/Speed.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>TESTE DE VELOCIDADE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.viewExt}>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(UnlockScreen)}  >
              <View style={style.button}>
                <IconButton icon={ require('../image/Lock.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>AUTO-DESBLOQUEIO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(ConsumeScreen)} >
              <View style={style.button}>
               <IconButton icon={ require('../image/Consume.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>CONSUMO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
