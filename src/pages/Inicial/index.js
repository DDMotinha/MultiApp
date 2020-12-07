// Import das integrações

import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

// Import das telas

import Boleto from '../Boleto';
import Consumo from '../Consumo';
import Teste from '../Teste';
import Liberacao from '../Liberacao';
import Contato from '../Contato';

// import de estilo

import style from './style';

// Navigation Buttons

export default function Inicial({ navigation }) {
    return (
    <View style={style.container}>
      <Image
        source={ require('../../images/logo.png')}
        style={style.img}
      />
      <View style={style.viewExt}>
        <View style={style.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(Boleto)} >
            <View style={style.button}>
              <IconButton icon={ require('../../images/Billet.png')} size={35} color={Colors.blue900}/>
              <Text style={style.buttonText}>2ª VIA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.viewExt}>
        <View style={style.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(Contato)} >
            <View style={style.button}>
              <IconButton icon={ require('../../images/Contact.png')} size={35} color={Colors.blue900}/>
              <Text style={style.buttonText}>ENTRAR EM CONTATO</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(Teste)} >
              <View style={style.button}>
                <IconButton icon={ require('../../images/Speed.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>TESTE DE VELOCIDADE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.viewExt}>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(Liberacao)}  >
              <View style={style.button}>
                <IconButton icon={ require('../../images/Lock.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>AUTO-DESBLOQUEIO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(Consumo)} >
              <View style={style.button}>
               <IconButton icon={ require('../../images/Consume.png')} size={35} color={Colors.blue900}/>
                <Text style={style.buttonText}>CONSUMO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
