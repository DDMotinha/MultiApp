// Import das integrações

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

// Import das telas

import BilletScreen from './BilletScreen';//
import TestScreen from './TestScreen';
import ConsumeScreen from './ConsumeScreen';//
import UnlockScreen from './UnlockScreen';//
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';

// Navigation Buttons

export default function HomeScreen({ navigation }) {
    return (
    <View style={styles.container}>
      <Image
        source={ require('../image/logo.png')}
        style={styles.img}
      />
      <View style={styles.viewExt}>
        <View style={styles.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(BilletScreen)} >
            <View style={styles.button}>
              <IconButton icon={ require('../image/Billet.png')} size={35} color={Colors.blue900}/>
              <Text style={styles.buttonText}>2ª VIA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewExt}>
        <View style={styles.viewInt}>
          <TouchableOpacity onPress={ () => navigation.navigate(ContactScreen)} >
            <View style={styles.button}>
              <IconButton icon={ require('../image/Contact.png')} size={35} color={Colors.blue900}/>
              <Text style={styles.buttonText}>ENTRAR EM CONTATO</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={styles.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(TestScreen)} >
              <View style={styles.button}>
                <IconButton icon={ require('../image/Speed.png')} size={35} color={Colors.blue900}/>
                <Text style={styles.buttonText}>TESTE DE VELOCIDADE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewExt}>
          <View style={styles.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(UnlockScreen)}  >
              <View style={styles.button}>
                <IconButton icon={ require('../image/Lock.png')} size={35} color={Colors.blue900}/>
                <Text style={styles.buttonText}>AUTO-DESBLOQUEIO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewInt}>
            <TouchableOpacity onPress={ () => navigation.navigate(ConsumeScreen)} >
              <View style={styles.button}>
               <IconButton icon={ require('../image/Consume.png')} size={35} color={Colors.blue900}/>
                <Text style={styles.buttonText}>CONSUMO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    img:{
      alignSelf: "center",
      width: '100%',
      height: '10%',
      padding: 70,
      marginTop: 20,
    },
    container: {
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      flex: 1,
      width: '98%',
    },
    button: {
      position: "absolute",
      marginBottom: 30,
      width: '99%',
      height: 120,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      flexDirection: "collumn",
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 18,
    },
    viewInt:{
      flex: 1,
    },
    viewExt: {
      flex: 2, 
      flexDirection: 'row',
    },
    imgIcon:{
      width: 50,
      height: 50,
    }
    
  });